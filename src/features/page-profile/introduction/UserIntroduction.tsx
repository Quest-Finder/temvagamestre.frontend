import { Card } from '@/components/ui/card'
import { UserIntroduction } from '.'
import { UserIntroductionMock } from './mock'

export function UserIntroductionComponent() {
  return (
    <UserIntroduction.Section>
      <UserIntroduction.SectionTitle title='Bio' />
      <Card className='flex flex-col gap-4 rounded-2xl border-neutral-200 px-4 py-6'>
        <UserIntroduction.Bio
          description={UserIntroductionMock.user.info.bio}
        />
      </Card>
    </UserIntroduction.Section>
  )
}
