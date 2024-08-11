'use client'

// TODO: Remove Clerk

// import { useUser } from '@clerk/nextjs'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { FormStepOneType } from '../validation'

export function useGetNameByClerk(
  savedData: FormStepOneType | null,
  form: UseFormReturn<FormStepOneType>,
  setNameLoading: Dispatch<SetStateAction<boolean>>,
) {
  useEffect(() => {
    if (!savedData) {
      form.setValue('name', '')
      setNameLoading(() => false)
    }
  }, [form, savedData, setNameLoading])

  // const { user } = useUser()

  // useEffect(() => {
  //   if (!savedData && user?.fullName) {
  //     form.setValue('name', user?.fullName)
  //     setNameLoading(() => false)
  //   }
  // }, [user?.fullName, form, savedData, setNameLoading])
}
