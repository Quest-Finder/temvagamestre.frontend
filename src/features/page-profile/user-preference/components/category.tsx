import { RPGType } from "../card-category/hooks/useRpgStyle";

export default function useCategory() {


  const getBackgroundColor = (type: RPGType) => {
    switch (type) {
      case RPGType.Heroica:
        return 'bg-[#095658]/5 text-[#095658]';
      case RPGType.NinjaVsSamurai:
        return 'bg-[#B12A5B]/5 text-[#B12A5B]';
      case RPGType.EspadaFeiticaria:
        return 'bg-[#5E3F6B]/5 text-[#5E3F6B]';
      case RPGType.Epica:
        return 'bg-[#3066BE]/5 text-[#3066BE]';
      case RPGType.Mitica:
        return 'bg-[#914E24]/5 text-[#914E24]';
      case RPGType.Sombria:
        return 'bg-[#333333]/5 text-[#333333]';
      case RPGType.Intriga:
        return 'bg-[#BD232F]/5 text-[#BD232F]';
      case RPGType.Misterio:
        return 'bg-[#e29120]/5 text-[#e29120]';
      case RPGType.Guerra:
        return 'bg-[#4C4C4C]/5 text-[#4C4C4C]';
      case RPGType.NaveMae:
        return 'bg-[#2D7D9A]/5 text-[#2D7D9A]';
      default:
        return 'bg-gray-200';
    }
  }

  return { getBackgroundColor };
}
