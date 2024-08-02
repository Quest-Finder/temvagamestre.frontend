export function generateXYearsUntillToday(oldestYear: number) {
  const currentDate = new Date().getFullYear()
  const maxOldDate = currentDate - oldestYear
  const years = []
  // eslint-disable-next-line no-plusplus
  for (let i = currentDate; i > maxOldDate; i--) {
    years.push(i)
  }
  return years
}
