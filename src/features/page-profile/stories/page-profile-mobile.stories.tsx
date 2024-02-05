import type { Meta, StoryObj } from '@storybook/react'
import { MobilePage } from '../desktop/mobile-page'

export default {
    title:'PageMobile',
    component:MobilePage,
    decorators:[
        (Story)=>{
            return(
                <>
                    <div className='py-3 min-h-screen '>
                        {Story()}
                    </div>
                </>
            )
        }
    ]
} as Meta<typeof MobilePage>


export const Primary:StoryObj<typeof MobilePage> = {
   
}