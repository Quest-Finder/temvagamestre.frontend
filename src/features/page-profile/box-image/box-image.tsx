import { CardWithImgs } from '.'

export interface BoxImageProps {
  arrayImgs: string[]
}
export function BoxImage({ arrayImgs }: BoxImageProps) {
  return (
    <CardWithImgs.Root>
      <CardWithImgs.Text content='Titulo - imagens' />
      <CardWithImgs.CardWithImg urlImgs={arrayImgs} />
    </CardWithImgs.Root>
  )
}
