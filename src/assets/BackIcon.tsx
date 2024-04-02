import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const BackIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path stroke="#403572" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 20.333 1.667 11 11 1.667" />
  </Svg>
)
export default BackIcon
