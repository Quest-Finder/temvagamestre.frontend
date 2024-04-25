import ButtonNavigation from '@/hooks/ButtonNavigation'
import { RegisterRoutes } from '@/services/routers'

export default function PagesStylesPlay() {
  return (
    <ButtonNavigation
      href={RegisterRoutes.Sucess}
      content='sucesso'
    />
  )
}
