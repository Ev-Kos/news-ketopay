import { SVGProps, FC } from 'react'

export const CrossIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg 
    width="22" 
    height="22" 
    fill="none"
    {...props}>
    <path 
      stroke="#000" 
      strokeLinecap="round" 
      strokeWidth="2" 
      d="M21 21 1 1m20 0L1 21"
    />
  </svg>
)

