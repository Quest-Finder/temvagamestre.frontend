export function getLocalStorage<T>(key: string, defaultValue: T): T {
  const savedData = localStorage.getItem(key)
  return savedData ? JSON.parse(savedData) : defaultValue
}
