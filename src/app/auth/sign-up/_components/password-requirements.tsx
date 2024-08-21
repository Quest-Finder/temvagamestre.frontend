import { Check, Dot } from 'lucide-react'

import type { PasswordRequirementType } from '../@types/password'
import texts from '../locales/pt-BR.json'

interface PasswordRequirementsProps {
  requirements: PasswordRequirementType[]
}

export function PasswordRequirements({
  requirements,
}: PasswordRequirementsProps) {
  const REQUIREMENT_TEXTS = texts.SignUpForm.password.requirements

  return (
    <ul className='space-y-0.5'>
      {requirements.map(item => (
        <li
          key={item.type}
          data-valid={item.isValid}
          className='flex items-center gap-1 data-[valid=true]:text-success [&>svg]:size-3'
        >
          {item.isValid ? <Check /> : <Dot />}
          {REQUIREMENT_TEXTS[item.type]}
        </li>
      ))}
    </ul>
  )
}
