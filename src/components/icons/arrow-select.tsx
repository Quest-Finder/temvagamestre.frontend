interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

function ArrowSelect({ ...props }: SvgComponentProps) {
  return (
    <svg
      width={11}
      height={6}
      viewBox='0 0 11 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.5 1l4 4 4-4'
        stroke='#94A3B8'
        strokeWidth={1.33333}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowSelect
