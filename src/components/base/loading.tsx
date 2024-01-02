import { Box, keyframes, styled } from "@mui/material"

const blinkAnimation = keyframes`
    0%,
    100%{
        background-color: #eee
    }
    50%{
        background-color: #fff
    }
`

const Loading = styled(Box)<{width?:string|number,height?:string|number}>(({width="100%",height="100%"}) => ({
  width: width,
  height: height,
  animation: `${blinkAnimation} 0.8s infinite linear`,
  borderRadius: '10px',
}))

export default Loading




