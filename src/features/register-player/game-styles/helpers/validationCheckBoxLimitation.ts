export function validationCheckBoxLimitation(array: string[], field: string, maxNumber: number) {
  if (array.length >= maxNumber && !array.includes(field)) {
   return true
  }
  return false
}