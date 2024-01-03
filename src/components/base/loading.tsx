import { Box, keyframes, styled } from "@mui/material"

const blinkAnimation = keyframes`
    from{
        background-color: #ddd
    }
    to{
        background-color: #fff
    }
`

const Loading = styled(Box)<{width?:string|number,height?:string|number}>(({width="100%",height="100%"}) => ({
  width: width,
  height: height,
  animation: `${blinkAnimation} 1s infinite ease-in-out`,
  borderRadius: '10px',
}))

export default Loading




