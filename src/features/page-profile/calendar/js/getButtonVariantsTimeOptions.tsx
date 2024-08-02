export function getButtonVariants(
  index: number,
  isMobile: boolean,
): {
  color: 'bg-teal-800' | 'bg-cyan-50'
  variant: 'text-white' | 'text-teal-950'
  hover: 'hover:bg-teal-800/90' | 'hover:bg-cyan-50/80'
} {
  const isEven = index % 2 === 0
  const color = isMobile && isEven ? 'bg-teal-800' : 'bg-cyan-50'
  const hover =
    isMobile && isEven ? 'hover:bg-teal-800/90' : 'hover:bg-cyan-50/80'
  const variant = isMobile && isEven ? 'text-white' : 'text-teal-950'

  return { color, hover, variant }
}
