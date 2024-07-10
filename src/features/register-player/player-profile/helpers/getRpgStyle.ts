import Exploracao from '@/assets/RpgProfile/Exploracao.svg'
import Interpretacao from '@/assets/RpgProfile/Interpretacao.svg'
import MatarEPilhar from '@/assets/RpgProfile/MatarEPilhar.svg'

import { RpgStyles, RpgStyleData } from '../types/palyerProfileTypes'

const rpgStyles: { [key in RpgStyles]: RpgStyleData } = {
  Exploração: {
    image: Exploracao,
    colorClass: 'bg-primary-100',
    stylingClass: 'border-primary-500 bg-primary-50',
  },
  'Matar e pilhar': {
    image: MatarEPilhar,
    colorClass: 'bg-secondary-100',
    stylingClass: 'border-secondary-500 bg-secondary-50',
  },
  Interpretação: {
    image: Interpretacao,
    colorClass: 'bg-accent-100',
    stylingClass: 'border-accent-500 bg-accent-50',
  },
}

export function getRpgStyling(rpgStyle: RpgStyles) {
  return rpgStyles[rpgStyle]
}
