export default function useLocalStorageGetItem<T>(key: string, defaultValue: T) {
    const savedData = localStorage.getItem(key)
    const parsedData = savedData ? JSON.parse(savedData) : defaultValue
    return parsedData
}
