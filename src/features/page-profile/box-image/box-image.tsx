import { CardWithImgs } from '.'
import img from '../header/assets/Rectangle.svg'

const arrayImgsMock: string[] = [img, img, img]
export interface BoxImageProps {
  arrayImgs?: string[]
}
export function BoxImage({ arrayImgs = arrayImgsMock }: BoxImageProps) {
  return (
    <CardWithImgs.Root>
      <CardWithImgs.Text content='Titulo - imagens' />
      <CardWithImgs.CardWithImg urlImgs={arrayImgs} />
    </CardWithImgs.Root>
  )
}
