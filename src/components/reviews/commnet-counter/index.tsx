import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import {Box, Typography, styled} from '@mui/material'

interface IfProps {
  commentCounter: number
}

const CommnetCounter = ({commentCounter}: IfProps) => {
  return (
    <Wrapper>
      <MessageOutlinedIcon sx={{color: '#dbdbdb'}} />
      <Typography variant="body5" sx={{fontWeight: 500}}>
        댓글 {commentCounter}개
      </Typography>
    </Wrapper>
  )
}

export default CommnetCounter

const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  '& > .MuiSvgIcon-root': {
    width: '20px',
    height: '20px',
  },
})
