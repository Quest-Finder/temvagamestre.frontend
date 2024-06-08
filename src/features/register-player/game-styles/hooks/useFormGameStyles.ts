import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FormGameStylesSchema } from "../validation"
import { GameStyle, FormGameStylesType } from "../types/gameStyles"
import useLocalStorageGetItem from "@/features/register-player/address registration/hooks/useLocalStorageGetItem"
import { useFetchData } from "./useFetchData"
import { defaultValues } from '../helpers/defaultValues'


export function useFormGameStyles() {
  const { data: gameStyles, isLoading, error } = useFetchData<GameStyle[]>(
    "https://tem-vaga-mestre-api-nnf7bytugq-uc.a.run.app/rpg-style"
  )
  const savedData = useLocalStorageGetItem<FormGameStylesType>('game-styles')

  const initalValue = savedData ? savedData : defaultValues

  const form = useForm<FormGameStylesType>({
    resolver: zodResolver(FormGameStylesSchema),
    defaultValues: initalValue,
  })

  return { form, gameStyles, isLoading, error }
}
