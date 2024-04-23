import { useRouter } from 'next/navigation'

export default function useNavigation(pathUrl: string) {
  const router = useRouter()
  return router.push(pathUrl)
}
