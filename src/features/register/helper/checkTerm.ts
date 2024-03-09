export function checkTerm(username: string, wordArray: string[]): boolean {
  const lowerCaseUser = username.toLowerCase()
  return wordArray.some(word => word.toLowerCase().includes(lowerCaseUser))
}
