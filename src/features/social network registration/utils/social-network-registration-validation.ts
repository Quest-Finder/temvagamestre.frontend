import { z } from 'zod'

export const socialNetworkValidation
    = z.object({
        facebook: z
            .object({
                username: z.string().max(255).optional(),
                visible: z.boolean().optional(),
            })
            .optional(),
        instagram: z
            .object({
                username: z.string().max(255).optional(),
                visible: z.boolean().optional().default(false),
            })
            .optional(),

        reddit: z
            .object({
                username: z.string().max(255).optional(),
                visible: z.boolean().optional().default(false),
            })
            .optional(),
        twitter: z
            .object({
                username: z.string().max(255).optional(),
                visible: z.boolean().optional().default(false),
            })
            .optional(),
        discord: z
            .object({
                username: z.string().max(255).optional(),
                visible: z.boolean().optional().default(false),
            })
            .optional(),
    })
