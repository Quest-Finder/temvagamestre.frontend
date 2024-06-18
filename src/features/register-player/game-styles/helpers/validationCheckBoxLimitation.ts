export function validationCheckBoxLimitation(
  array: string[],
  field: string,
  maxNumber: number,
) {
  return array.length >= maxNumber && !array.includes(field)
}
