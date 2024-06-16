import { z } from "zod"
import { FormPlayerProfileSchema } from "../validation"


export interface PlayerProfileType {
  id: string,
  title: string,
  description: string
}

export type FormPlayerProfileType = z.infer<typeof FormPlayerProfileSchema>