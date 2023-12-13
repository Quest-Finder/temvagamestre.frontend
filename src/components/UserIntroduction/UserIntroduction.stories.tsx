import { UserInformation } from './UserInformation'
import { Separator } from '../ui/separator'

export default {
  title: 'UserInformation',
}

export function UserIntroduction() {
  return (
    <>
      <UserInformation.UserTitle
        userName='Rodrigo'
        userClass='Elfo experiente'
        userRole='Mestre'
      />
      <Separator />
      <UserInformation.Quote>
        A vida não tem graça sem alguns dragões :)
      </UserInformation.Quote>
      <UserInformation.Section>
        <UserInformation.SectionTitle title='Bio' />
        <UserInformation.Bio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          earum perferendis asperiores itaque culpa ratione nihil optio,
          temporibus omnis doloremque dolor consequuntur, accusamus suscipit
          labore quisquam, eum laudantium dolorum explicate. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Tenetur eveniet quod modi
          placeat enim nemo autem, natus cumque omnis ipsam, in ex
          exercitationem esse. Quae corporis quibusdam delectus nam quos.
        </UserInformation.Bio>
      </UserInformation.Section>
    </>
  )
}

UserIntroduction.story = {
  name: 'User Introduction',
}
