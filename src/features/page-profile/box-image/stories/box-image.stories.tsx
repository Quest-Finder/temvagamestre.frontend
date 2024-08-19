import type { Meta, StoryObj } from '@storybook/react'

import img from '../../header/assets/Rectangle.svg'
import { CardWithImgs } from '..'
import { BoxImage, BoxImageProps } from '../box-image'

const arrayImgsMock: string[] = [img, img, img, img, img]

export default {
  title: 'Imagens Profile/Box with imagens',
  component: BoxImage,
} as Meta<BoxImageProps>

export const Primary: StoryObj<BoxImageProps> = {
  render: () => (
    <div className='max-w-[37.5rem]'>
      <CardWithImgs.Root>
        <CardWithImgs.Text content='Titulo - imagens' />
        <CardWithImgs.CardWithImg urlImgs={arrayImgsMock} />
      </CardWithImgs.Root>
    </div>
  ),
}
