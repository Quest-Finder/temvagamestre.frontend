import { z } from "zod"
import { FormPlayerProfileSchema } from "../validation"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface PlayerProfileType {
  id: string,
  title: RpgStyles,
  description: string
}

export interface RpgStyleData {
  image: StaticImport | string,
  colorClass: string
  stylingClass: string
}

export type RpgStyles = 'Exploração' | 'Matar e pilhar' | 'Interpretação';

export type FormPlayerProfileType = z.infer<typeof FormPlayerProfileSchema>