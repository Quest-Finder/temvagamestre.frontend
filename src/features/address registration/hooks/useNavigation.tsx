import { useRouter } from 'next/navigation'

export default function useNavigation() {
    const router = useRouter()

    function navigateToPlayerProfile(url: string) {
        router.push(url)
    }

    return { navigateToPlayerProfile }
}
