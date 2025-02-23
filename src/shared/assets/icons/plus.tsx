import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      d='M12 20V12M12 12V4M12 12H20M12 12H4'
      stroke='#ffffff'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)

export default SvgComponent
