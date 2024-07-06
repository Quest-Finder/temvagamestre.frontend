import Exploracao from '../assets/Exploracao.svg'
import Interpretacao from '../assets/Interpretacao.svg'
import MatarEPilhar from '../assets/MatarEPilhar.svg'

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
