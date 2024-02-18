import { EnumRPGTypes } from '../card-category/hooks/enumRPGType'

export default function useCategory() {
  const getBackgroundColor = (type: EnumRPGTypes) => {
    switch (type) {
      case EnumRPGTypes.Heroica:
        return 'bg-[#095658]/5 text-[#095658]'
      case EnumRPGTypes.NinjaVsSamurai:
        return 'bg-[#B12A5B]/5 text-[#B12A5B]'
      case EnumRPGTypes.EspadaFeiticaria:
        return 'bg-[#5E3F6B]/5 text-[#5E3F6B]'
      case EnumRPGTypes.Epica:
        return 'bg-[#3066BE]/5 text-[#3066BE]'
      case EnumRPGTypes.Mitica:
        return 'bg-[#914E24]/5 text-[#914E24]'
      case EnumRPGTypes.Sombria:
        return 'bg-[#333333]/5 text-[#333333]'
      case EnumRPGTypes.Intriga:
        return 'bg-[#BD232F]/5 text-[#BD232F]'
      case EnumRPGTypes.Misterio:
        return 'bg-[#e29120]/5 text-[#e29120]'
      case EnumRPGTypes.Guerra:
        return 'bg-[#4C4C4C]/5 text-[#4C4C4C]'
      case EnumRPGTypes.NaveMae:
        return 'bg-[#2D7D9A]/5 text-[#2D7D9A]'
      default:
        return 'bg-gray-200'
    }
  }

  return { getBackgroundColor }
}
