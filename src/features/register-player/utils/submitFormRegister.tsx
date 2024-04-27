/* eslint-disable react-hooks/rules-of-hooks */
import { TValidation } from '../about-you/types/validation'
import { validateAboutYou } from '../about-you/utils/validation'
import useLocalStorageGetItem from '../address registration/hooks/useLocalStorageGetItem'
import { addressRegistrationValidationT } from '../address registration/types/address-registration'
import {
  FormStepOneSchema,
  FormStepOneType,
} from '../player-registration/FormStep1/validation'
import { TsocialNetworkValidation } from '../social network registration/types/social-network'
import { socialNetworkValidation } from '../social network registration/utils/social-network-registration-validation'

function getFormsInLocalStrage() {
  const dateFormOne = useLocalStorageGetItem<FormStepOneType>('form_step_one')
  const dateFormTwo =
    useLocalStorageGetItem<TsocialNetworkValidation>('form_data_adress')
  const dateFormTree = useLocalStorageGetItem<TValidation>(
    'form_data_about_you',
  )
  const dateFormFour =
    useLocalStorageGetItem<addressRegistrationValidationT>('form_data_adress')
  const mergedData = {
    ...dateFormOne,
    ...dateFormTwo,
    ...dateFormTree,
    ...dateFormFour,
  }

  return { mergedData }
}

export default async function useSubmitFormRegister() {
  const { mergedData } = getFormsInLocalStrage()
  const resultOne = FormStepOneSchema.safeParse(mergedData)
  const resultTwo = socialNetworkValidation.safeParse(mergedData)
  const resultThree = validateAboutYou.safeParse(mergedData)
  if (!resultOne.success && !resultTwo.success && !resultThree.success) {
    return null
  }
  try {
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ mergedData }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
}
