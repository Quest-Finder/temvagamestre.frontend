import { z } from 'zod'
import { socialNetworkValidation } from '../utils/social-network-registration-validation'
import { parseSocialValidationInArray } from '../utils/parse-validation-in-array'

export type TsocialNetworkValidation = z.infer<
    typeof socialNetworkValidation
>
export type keysFieldValues = "facebook" | "instagram" | "reddit" | "twitter" | "discord"

