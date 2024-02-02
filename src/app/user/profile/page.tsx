import { DesktopPage } from '@/features/page-profile/desktop/desktopPage'
import { MobilePage } from '@/features/page-profile/desktop/mobile-page'
import { HeaderProfile } from '@/features/page-profile/header/header'


export default function Profile() {
  return (
    <>
      <HeaderProfile />
      <DesktopPage/>
      <MobilePage/>
    </>
  )
}
