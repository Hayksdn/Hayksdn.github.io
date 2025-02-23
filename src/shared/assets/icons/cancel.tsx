import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => (
  <svg
    {...props}
    width={'22px'}
    height={'22px'}
    viewBox='0 0 60 60'
    fill='none'
  >
    <linearGradient
      id='IkUh6ey5BhnCh~hrMs1fdb_119731_gr2'
      x1='32'
      x2='32'
      y1='56'
      y2='6'
      gradientUnits='userSpaceOnUse'
      spreadMethod='reflect'
    >
      <stop offset='0' stopColor='#DB4444'></stop>
      <stop offset='.204' stopColor='#DB4444'></stop>
      <stop offset='.521' stopColor='#DB4444'></stop>
      <stop offset='.794' stopColor='#DB4444'></stop>
      <stop offset='.989' stopColor='#DB4444'></stop>
      <stop offset='1' stopColor='#DB4444'></stop>
    </linearGradient>
    <path
      fill='url(#IkUh6ey5BhnCh~hrMs1fdb_119731_gr2)'
      d='M57,31c0,13.805-11.195,25-25,25S7,44.805,7,31S18.195,6,32,6S57,17.195,57,31z'
    ></path>
    <path
      fill='#fff'
      d='M43.268,19.732L43.268,19.732c0.976,0.976,0.976,2.559,0,3.535L24.267,42.268 c-0.976,0.976-2.559,0.976-3.535,0l0,0c-0.976-0.976-0.976-2.559,0-3.535l19.001-19.001C40.709,18.756,42.292,18.756,43.268,19.732 z'
    ></path>
    <path
      fill='#fff'
      d='M43.268,42.268L43.268,42.268c-0.976,0.976-2.559,0.976-3.535,0L20.732,23.267 c-0.976-0.976-0.976-2.559,0-3.535l0,0c0.976-0.976,2.559-0.976,3.535,0l19.001,19.001C44.244,39.709,44.244,41.292,43.268,42.268z'
    ></path>
  </svg>
)

export default SvgComponent

//
