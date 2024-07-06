// eslint-disable-next-line import/no-unresolved
import Exploracao from '../assets/Exploracao.svg'
// eslint-disable-next-line import/no-unresolved
import Interpretacao from '../assets/Interpretacao.svg'
// eslint-disable-next-line import/no-unresolved
import MatarEPilhar from '../assets/MatarEPilhar.svg'

export function getRpgImage(rpgStyle: string) {
  switch (rpgStyle) {
    case 'Exploração':
      return Exploracao
    case 'Matar e pilhar':
      return MatarEPilhar
    case 'Interpretação':
      return Interpretacao
    default:
      return ''
  }
}

export function getRpgImageColor(rpgStyle: string) {
  switch (rpgStyle) {
    case 'Exploração':
      return 'bg-primary-100'
    case 'Matar e pilhar':
      return 'bg-secondary-100'
    case 'Interpretação':
      return 'bg-accent-100'
    default:
      return ''
  }
}

export function getRpgStyling(rpgStyle: string) {
  switch (rpgStyle) {
    case 'Exploração':
      return 'border-primary-500 bg-primary-50'
    case 'Matar e pilhar':
      return 'border-secondary-500 bg-secondary-50'
    case 'Interpretação':
      return 'border-accent-500 bg-accent-50'
    default:
      return ''
  }
}
