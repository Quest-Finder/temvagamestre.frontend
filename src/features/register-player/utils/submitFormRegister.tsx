/* eslint-disable react-hooks/rules-of-hooks */
import { TValidation } from '../about-you/types/validation'
import { validateAboutYou } from '../about-you/utils/validation'
import useLocalStorageGetItem from '../address-registration/hooks/useLocalStorageGetItem'
import { addressRegistrationValidationT } from '../address-registration/types/address-registration'
import { addressRegistrationValidation } from '../address-registration/utils/address-registration-validation'
import { getPlayerGameStylesData } from '../player-profile/helpers/getPlayerGameStylesData'
import { FormPlayerProfileSchema } from '../player-profile/validation'
import {
  FormStepOneSchema,
  FormStepOneType,
} from '../player-registration/validation'
import { TsocialNetworkValidation } from '../social-network-registration/types/social-network'
import { socialNetworkValidation } from '../social-network-registration/utils/social-network-registration-validation'

function getFormsInLocalStrage() {
  const dateFormOne = useLocalStorageGetItem<FormStepOneType>('form_step_one')
  const dateFormTwo = useLocalStorageGetItem<TsocialNetworkValidation>(
    'form_data_social_network',
  )
  const dateFormTree = useLocalStorageGetItem<TValidation>(
    'form_data_about_you',
  )
  const dateFormFour =
    useLocalStorageGetItem<addressRegistrationValidationT>('form_data_adress')
  // const dateFormFive =
  //   useLocalStorageGetItem('game_styles')
  const dateFormSix = getPlayerGameStylesData()
  const mergedData = {
    ...dateFormOne,
    ...dateFormTwo,
    ...dateFormTree,
    ...dateFormFour,
    // ...dateFormFive,
    ...dateFormSix,
  }
  return { mergedData }
}

function clearFormsInLocalStorage() {
  localStorage.removeItem('form_step_one')
  localStorage.removeItem('form_data_adress')
  localStorage.removeItem('form_data_social_network')
  localStorage.removeItem('form_data_about_you')
  localStorage.removeItem('game_styles')
}

export default async function useSubmitFormRegister() {
  const { mergedData } = getFormsInLocalStrage()
  const resultOne = FormStepOneSchema.safeParse(mergedData)
  const resultTwo = socialNetworkValidation.safeParse(mergedData)
  const resultThree = validateAboutYou.safeParse(mergedData)
  const resultFour = addressRegistrationValidation.safeParse(mergedData)
  // const resultFive = FormGameStylesSchema.safeParse(mergedData)
  const resultSix = FormPlayerProfileSchema.safeParse(mergedData)
  if (
    !resultOne.success &&
    !resultTwo.success &&
    !resultThree.success &&
    !resultFour &&
    !resultSix
  ) {
    return null
  }
  try {
    const token = ''
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      method: 'POST',
      body: JSON.stringify({ mergedData }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    clearFormsInLocalStorage()
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
}
