import React from 'react'
import { SocialNetworkBox, SocialNetworkIcon, SocialNetworkInput, SocialNetworkText, SocialNetworkToggleInput } from './socialNetworkRegistration'
import { TrashIcon } from './icons/trash'

interface SocialNetworkComponentProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    networkIcon: React.ElementType,
    networkLink: string,
    idToggle: string
}
export default function SocialNetworkComponent({ networkIcon, idToggle, networkLink, ...restInput }: SocialNetworkComponentProps) {
    return (
        <SocialNetworkBox asCol={true}>
            <SocialNetworkBox>
                <SocialNetworkIcon icon={networkIcon} />
                <SocialNetworkBox asCol={true}>
                    <SocialNetworkText text='url' variant='secondary' />
                    <SocialNetworkInput {...restInput} text={networkLink} />
                </SocialNetworkBox>
            </SocialNetworkBox>
            <div className='flex items-center justify-between gap-2'>
                <SocialNetworkToggleInput text='Visibilidade' id={idToggle} />
                <SocialNetworkIcon icon={TrashIcon} text='Visibilidade' />
            </div>
        </SocialNetworkBox>

    )
}
