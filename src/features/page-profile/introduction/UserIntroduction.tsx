import { Card } from '@/components/ui/card'
import { UserIntroduction } from '.'
import { UserIntroductionMock } from './mock'

export function UserIntroductionComponent() {
  return (
    <>
      <UserIntroduction.SectionTitle
        title='Bio'
        className=' block sm:hidden'
      />
      <Card className='flex flex-col rounded-xl border-[1px] px-10 py-6 sm:px-6 sm:pt-4 '>
        {/* <UserIntroduction.UserTitle
          userName={UserIntroductionMock.user.first_name}
          userNickname={UserIntroductionMock.user.nickname}
          userRole={UserIntroductionMock.user.role}
        /> */}
        {/* <Separator className='hidden sm:block' /> */}
        {/* <UserIntroduction.Quote text={UserIntroductionMock.user.info.quote} /> */}
        <UserIntroduction.Section>
          <UserIntroduction.SectionTitle
            title='Bio'
            className='hidden sm:block'
          />
          <UserIntroduction.Bio
            description={UserIntroductionMock.user.info.bio}
          />
        </UserIntroduction.Section>
      </Card>
    </>
  )
}
