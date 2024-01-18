import Box from '@mui/material/Box'
import {keyframes, styled} from '@mui/material'

const blinkAnimation = keyframes`
    from{
        background-color: #ddd
    }
    to{
        background-color: #fff
    }
`

const Loading = styled(Box)<{
  width?: string | number
  height?: string | number
  borderRadius?: string | number
}>(({width = '100%', height = '100%', borderRadius = '10px'}) => ({
  width: width,
  height: height,
  animation: `${blinkAnimation} 1s infinite ease-in-out`,
  borderRadius: borderRadius,
}))

export default Loading
