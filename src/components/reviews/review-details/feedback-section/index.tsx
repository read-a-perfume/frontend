import Box from '@mui/material/Box'
import CounterSection from './counter-section'
import {useState} from 'react'
import CommentList from './comment-list'
import CommentInput from './comment-input'
import useFetchComment from '../hooks/use-fetch-comment'

//사용자와 상호작용할 수 있는 기능이 모여 있는 섹션
const FeedbackSection = ({id}: {id: number}) => {
  const [isOpen, setIsOpen] = useState(false)
  const {createCommentMutate, deleteCommnetMutate, commentData} =
    useFetchComment({id})
  return (
    <Box sx={{position: 'absolute', width: '100%', bottom: 0}}>
      <CounterSection setIsOpen={setIsOpen} open={isOpen} />
      <CommentList
        isOpen={isOpen}
        comments={commentData?.items}
        deleteCommnet={deleteCommnetMutate}
        id={id}
      />
      <CommentInput createComment={createCommentMutate} id={id} />
    </Box>
  )
}

export default FeedbackSection
