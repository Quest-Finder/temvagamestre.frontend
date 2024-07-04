export function generateDaysOfAMonth() {
  const days = []
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      days.push(`0${i}`)
    } else days.push(i)
  }
  return days
}
