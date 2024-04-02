import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const PlusIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M8.213 1.214a1.214 1.214 0 1 0-2.426 0v4.572H1.213a1.214 1.214 0 0 0 0 2.428h4.574v4.572a1.214 1.214 0 1 0 2.426 0V8.214h4.574a1.214 1.214 0 0 0 0-2.428H8.213V1.214Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PlusIcon
