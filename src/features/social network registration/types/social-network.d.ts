import { z } from 'zod'

import { socialNetworkValidation } from '../utils/social-network-registration-validation'

export type TsocialNetworkValidation = z.infer<typeof socialNetworkValidation>
