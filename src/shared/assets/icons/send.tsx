import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => (
  <svg
    className='sendIcon'
    width='22'
    height='20'
    viewBox='0 0 22 20'
    fill='none'
  >
    <path
      d='M8.91196 9.9998H2.99996L1.02296 2.1348C1.0103 2.0891 1.00259 2.04216 0.999959 1.9948C0.977959 1.2738 1.77196 0.773804 2.45996 1.1038L21 9.9998L2.45996 18.8958C1.77996 19.2228 0.995959 18.7368 0.999959 18.0288C1.00198 17.9655 1.0131 17.9029 1.03296 17.8428L2.49996 12.9998'
      stroke='#FAFAFA'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default SvgComponent
