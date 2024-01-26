import Text from '@/components/typograph/text'
import { userMock } from '../mocks/mock'
import Root from './components/Root'
import CardBadge from './components/card-badge'
import CardCategory from './components/card-category'

export const UserPreference = {
  CardBadge,
  CardCategory,
  Root,
}

export default function UserPreferences() {
  return (
    <UserPreference.Root>
      <Text
        as='h1'
        size='xl'
        className='mb-4 text-2xl text-neutral-950'
      >
        Estilos preferidos
      </Text>
      <UserPreference.CardCategory rpgStyle={userMock.preferences.rpgStyles} />
      <Text
        as='h1'
        size='xl'
        className='mb-4 text-2xl text-neutral-950'

      >
        Conquistas
      </Text>
      <UserPreference.CardBadge badges={userMock.badges} />
    </UserPreference.Root>
  )
}
