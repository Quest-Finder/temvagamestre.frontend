import { Separator } from '../ui/separator'
import { UserInformation } from './UserInformation'
import { UserIntroductionMock } from './mock'

export function UserIntroduction() {
  return (
    <>
      <UserInformation.UserTitle
        userName={UserIntroductionMock.user.first_name}
        userNickname={UserIntroductionMock.user.nickname}
        userRole={UserIntroductionMock.user.role}
      />
      <Separator className='hidden sm:block' />
      <UserInformation.Quote>
        {UserIntroductionMock.user.info.quote}
      </UserInformation.Quote>
      <UserInformation.Section>
        <UserInformation.SectionTitle title='Bio' />
        <UserInformation.Bio description={UserIntroductionMock.user.info.bio} />
      </UserInformation.Section>
    </>
  )
}
