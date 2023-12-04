import styled from '@emotion/styled'
import { Box } from '@mui/material'

const FeedImg = () => {
  return (
    <FeedImgContainer style={{backgroundColor: 'black'}}></FeedImgContainer>
  )
}

export default FeedImg

const FeedImgContainer = styled(Box)(() => ({
  width: '464px',
  height: '184px',
  margin: '19px 0 14px 0',
  borderRadius: '16px',
}))
