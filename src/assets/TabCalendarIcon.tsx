import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const TabCalendarIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.color ?? '#ADAFB6'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18"
    />
  </Svg>
)
export default TabCalendarIcon
