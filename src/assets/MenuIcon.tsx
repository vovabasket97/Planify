import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const MenuIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path stroke="#8B97A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
  </Svg>
)
export default MenuIcon
