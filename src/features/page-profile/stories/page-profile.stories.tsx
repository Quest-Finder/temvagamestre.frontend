import type { Meta, StoryObj } from '@storybook/react'
import { DesktopPage } from '../desktop/desktopPage'
import { HeaderProfile } from '../header/header'

export default {
    title:'DesktopPage',
    component:DesktopPage,
    decorators:[
        (Story)=>{
            return(
                <>
                    <div className='py-3 min-h-screen '>
                        <HeaderProfile/>
                        {Story()}
                    </div>
                </>
            )
        }
    ]
} as Meta<typeof DesktopPage>


export const Primary:StoryObj<typeof DesktopPage> = {
   
}