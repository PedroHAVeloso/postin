type PostinSvgProps = {
  className?: string;
}

export default function PostinSvg({ className = "" }: PostinSvgProps) {
  return <svg className={className} height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={className} d="M150 300C232.843 300 300 232.843 300 150C300 95.8158 271.27 48.3417 228.213 21.9799C209.044 87.3724 163.62 223.815 88 286.5L87.1159 286.222C106.241 295.066 127.544 300 150 300ZM1.74084 172.926C142.69 129.313 211.099 54.3539 228.048 21.8792C205.311 7.99823 178.589 0 150 0C67.1572 0 0 67.1573 0 150C0 157.795 0.594604 165.451 1.74084 172.926Z" fill="black" />
  </svg>
}