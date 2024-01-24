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

export default function UserPreferencesExample() {
  return (
    <UserPreference.Root>
      <Text
        as='h1'
        size='xl'
      >
        Estilos preferidos
      </Text>
      <UserPreference.CardCategory rpgStyle={userMock.preferences.rpgStyles} />
      <Text
        as='h1'
        size='xl'
      >
        Conquistas
      </Text>
      <UserPreference.CardBadge badges={userMock.badges} />
    </UserPreference.Root>
  )
}
