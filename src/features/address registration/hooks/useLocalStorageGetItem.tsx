export default function useLocalStorageGetItem<T>(key: string): T | null {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}
