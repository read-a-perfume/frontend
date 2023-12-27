import {Box} from '@mui/material'
import CounterSection from './counter-section'
import {useState} from 'react'
import CommentList from './comment-list'
import CommentInput from './comment-input'

//사용자와 상호작용할 수 있는 기능이 모여 있는 섹션
const FeedbackSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box sx={{position: 'absolute', width: '100%', bottom: 0}}>
      <CounterSection setIsOpen={setIsOpen} />
      <CommentList isOpen={isOpen} />
      <CommentInput />
    </Box>
  )
}

export default FeedbackSection
