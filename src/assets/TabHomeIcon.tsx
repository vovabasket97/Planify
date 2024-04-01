import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const TabHomeIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.color ?? '#ADAFB6'}
      strokeWidth={1.5}
      d="M20.47 6.205c.671.47 1.236 1.181 1.632 1.94.397.76.658 1.631.658 2.455v6.78a5.372 5.372 0 0 1-5.37 5.37H6.61c-2.966 0-5.37-2.418-5.37-5.38v-6.9c0-.773.238-1.602.597-2.331.36-.73.871-1.424 1.482-1.9l5.01-3.91.002-.002C10.1.956 12.87.887 14.71 2.175l5.76 4.03Zm0 0-5.76-4.03 5.76 4.03Z"
    />
  </Svg>
)
export default TabHomeIcon
