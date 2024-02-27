import React, { ElementType } from 'react'
import { TikTokIcon } from './icons/tiktok'
import { TrashIcon } from './icons/trash'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface SocialNetworkRootProps {
    children: React.ReactNode
    asCol?: boolean
}
function SocialNetworkBox({ children, asCol = false }: SocialNetworkRootProps) {
    return (
        <div className={`flex w-full gap-4 ${asCol && 'flex-col'}`}>{children}</div>
    )
}

const textVariants = cva('font-normal text-sm antialiased', {
    variants: {
        variant: {
            default: 'text-neutral-300 ',
            secondary: 'text-[#000000] uppercase',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})
interface SocialNetworkTextProps extends VariantProps<typeof textVariants> {
    text: string
    element?: ElementType
    className?: string
}

function SocialNetworkText({
    text,
    element = 'p',
    className,
    variant,
}: SocialNetworkTextProps) {
    const Text = element
    return (
        <Text className={cn(textVariants({ variant, className }))}>{text}</Text>
    )
}

interface SocialNetworkIconProps extends React.SVGProps<SVGSVGElement> {
    icon: ElementType
    text?: string
}
function SocialNetworkIcon({ icon, text, ...rest }: SocialNetworkIconProps) {
    const Icon = icon
    return (
        <div className='flex items-center gap-2 '>
            <Icon {...rest} />
            {text && <SocialNetworkText text={text} />}
        </div>
    )
}
interface SocialNetworkInput
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    text?: string
}
function SocialNetworkInput({ text, ...restInput }: SocialNetworkInput) {
    return (
        <section className='flex items-center justify-center rounded-md border border-neutral-300 px-3 py-2 '>
            {text && <SocialNetworkText text={text} />}
            <input
                {...restInput}
                type='text'
                className='placeholder-text-neutral-300 w-full text-neutral-800 outline-none'
            />
        </section>
    )
}
interface SocialNetworkToggleInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    text?: string
}

function SocialNetworkToggleInput({
    text,
    id,
    ...rest
}: SocialNetworkToggleInputProps) {
    return (
        <div className='flex items-center justify-center gap-2'>
            <label
                htmlFor={id}
                className='relative inline-flex cursor-pointer items-center outline-none'
            >
                <input
                    type='checkbox'
                    id={id}
                    className='peer sr-only outline-none'
                    {...rest}
                />
                <div className='h-6 w-11 cursor-pointer rounded-xl bg-[#E2E8F0] transition-all  peer-checked:bg-[#0F172A] peer-focus:outline-none peer-focus:ring-[#0F172A]' />
                <span className='absolute left-1 top-[2px]  z-10 h-5 w-5 rounded-full bg-[#FFFFFF] shadow-md transition-all peer-checked:left-5' />
            </label>
            {text && <SocialNetworkText text={text} />}
        </div>
    )
}

export {
    SocialNetworkIcon,
    SocialNetworkBox,
    SocialNetworkInput,
    SocialNetworkText,
    SocialNetworkToggleInput
}
