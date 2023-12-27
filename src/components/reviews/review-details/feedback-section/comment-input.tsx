import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  useTheme,
} from '@mui/material'
import {useState} from 'react'
import useFetchComment from '../hooks/use-fetch-comment'
useTheme

const CommentInput = () => {
  const [value, setValue] = useState('')
  const {createReviewCommentMutate, isCreateLoading} = useFetchComment()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  useTheme
  const handleSubmit = () => {
    createReviewCommentMutate({content: value})
    setValue('')
  }

  return (
    <CommentWrapper>
      <CommetnInputTextFiled
        hiddenLabel
        placeholder="댓글 달기"
        value={value}
        onChange={handleChange}
        InputLabelProps={{shrink: false}}
      />
      <Button
        sx={{position: 'absolute', right: 0, padding: '2px 12px'}}
        onClick={handleSubmit}
        disabled={isCreateLoading ? true : false}
      >
        <Typography variant="body3">등록</Typography>
      </Button>
    </CommentWrapper>
  )
}

export default CommentInput
const CommentWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
})

const CommetnInputTextFiled = styled(TextField)(({theme}) => ({
  '&.MuiFormControl-root': {
    width: '100%',
  },
  '& > div': {
    boxSizing: 'content-box',
  },
  '& .MuiInputBase-root': {
    ...theme.typography.body3,
    borderRadius: '10px',
  },
  '&.MuiInputBase-root > .MuiInputBase-input': {
    height: '17px',
    padding: '15.5px 73px 15.5px 16px',
    ...theme.typography.body3,
  },
}))
