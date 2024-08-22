export type PasswordRequirementType = {
  type: 'length' | 'uppercase' | 'lowercase' | 'number' | 'symbols'
  isValid: boolean
}
