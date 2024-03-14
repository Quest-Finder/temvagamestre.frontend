import { UserIntroduction } from '.'
import { UserIntroductionMock } from './mock'

export function UserIntroductionComponent() {
  return (
    <UserIntroduction.Section>
      <UserIntroduction.SectionTitle
        title='Bio'
        className=' block sm:hidden'
      />
      <UserIntroduction.SectionTitle
        title='Bio'
        className='hidden sm:block'
      />
      <UserIntroduction.Bio description={UserIntroductionMock.user.info.bio} />
    </UserIntroduction.Section>
  )
}
