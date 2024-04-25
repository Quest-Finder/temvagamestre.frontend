export function encode(jsonString: string) {
  return btoa(jsonString)
}

export function decode(jsonString: string) {
  return atob(jsonString)
}
