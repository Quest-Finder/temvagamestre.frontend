import { useRouter } from 'next/navigation'

export default function useNavigation(path: string) {
  const router = useRouter()
  return () => {
    router.push(path)
  }
}
