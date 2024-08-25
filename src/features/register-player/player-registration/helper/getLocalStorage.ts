import { decode, encode } from './encrypton'

export function getSecureLocalStorage<T>(key: string): T {
  const savedData = localStorage.getItem(key)
  return savedData && JSON.parse(decode(savedData))
}

export function setSecureLocalStorage<T>(key: string, data: T) {
  const jsonString = JSON.stringify(data)
  return localStorage.setItem(key, encode(jsonString))
}
