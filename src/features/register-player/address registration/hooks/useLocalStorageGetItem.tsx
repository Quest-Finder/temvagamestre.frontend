export default function useLocalStorageGetItem<T>(key: string): T | null {
  const data = localStorage.getItem(key)
  if (!data) return null
  return JSON.parse(data) as T
}
