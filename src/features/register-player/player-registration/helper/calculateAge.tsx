export function calculateAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const currentMonth = today.getMonth()
  const birthMonth = birthDate.getMonth()

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && today.getDate() < birthDate.getDate())
  ) {
    age -= 1
  }

  return age
}
