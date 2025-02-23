import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => (
  <svg width='28' height='30' viewBox='0 0 32 32' fill='none'>
    <path
      d='M3 7L16 16L29 7M3 25H29V7H3V25Z'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default SvgComponent
