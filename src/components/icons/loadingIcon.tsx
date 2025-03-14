import { SVGProps, FC } from 'react'

export const LoadingIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg 
    width="36" 
    height="36" 
    fill="none"
    {...props}>
    <path 
      fill="#096FFA" 
      fillRule="evenodd" 
      d="M19.788 28.783a3.598 3.598 0 1 1 0 7.196 3.598 3.598 0 0 1 
        0-7.196ZM8.53 23.386a4.497 4.497 0 1 1 0 8.995 4.497 4.497 0 0 1 
        0-8.995Zm20.829.9a3.598 3.598 0 1 1 0 7.196 3.598 3.598 0 0 
        1 0-7.196Zm3.922-7.523a2.698 2.698 0 1 1 0 5.397 2.698 2.698 0 0 
        1 0-5.396Zm-28.783-5.97a4.497 4.497 0 1 1 0 8.995 4.497 4.497 0 0 
        1 0-8.994Zm27.499-1.425a1.799 1.799 0 1 1 0 3.597 1.799 1.799 0 0 
        1 0-3.597ZM14.392 0a5.397 5.397 0 1 1 0 10.794 5.397 5.397 0 0 1 
        0-10.794Zm13.492 5.397a.9.9 0 1 1 0 1.799.9.9 0 0 1 0-1.8Z" 
      clipRule="evenodd"/>
  </svg>
)
