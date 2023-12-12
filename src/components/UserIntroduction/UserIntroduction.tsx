import { Separator } from '../ui/separator'
import { UserInformation } from './UserInformation'

export function UserIntroduction() {
  return (
    <>
      <UserInformation.UserTitle
        userName=''
        userClass=''
        userRole=''
      />
      <Separator />
      <UserInformation.Quote userQuote='' />
      <UserInformation.Section>
        <UserInformation.SectionTitle title='Bio' />
        <UserInformation.Bio bioDescription='' />
      </UserInformation.Section>
    </>
  )
}
