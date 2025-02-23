import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  color2 = svgIconDefaultProps.color2,
  ...props
}: SvgIconType) => (
  <svg width='110' height='14' viewBox='0 0 110 14' fill='none'>
    <circle opacity='0.5' cx='6' cy='7' r='6' fill={color} />
    <circle opacity='0.5' cx='30' cy='7' r='6' fill={color} />
    <circle cx='55' cy='7' r='5' fill='#DB4444' />
    <circle cx='55' cy='7' r='6' stroke={color} strokeWidth='2' />
    <circle opacity='0.5' cx='80' cy='7' r='6' fill={color} />
    <circle opacity='0.5' cx='104' cy='7' r='6' fill={color} />
  </svg>
)

export default SvgComponent
