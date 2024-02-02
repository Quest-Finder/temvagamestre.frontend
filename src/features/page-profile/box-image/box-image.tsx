import { CardWithImgs } from '.'
import img from '../../page-profile/header/assets/Rectangle.svg'

const arrayImgs: string[] = [
  img,
  img,
  img,
]
export function BoxImage() {
  return (
    <CardWithImgs.Root>
      <CardWithImgs.Text content='Titulo - imagens' />
      <CardWithImgs.Card urlImgs={arrayImgs} />
    </CardWithImgs.Root>
  )
}
