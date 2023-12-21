import {Box, styled} from '@mui/material'
import ReviewFormFirst from './review-form-first'
import ReviewFormSecond from './review-form-second'
import ReviewFormLast from './review-form-last'
import ReviewFormProgassState from './review-form-prograss-state'
import useReviewFormPreNext from './hooks/use-review-form-pre-nex'
import ReviewFormPreNext from './review-form-pre-next'
import usePostReviewCreate from './hooks/use-post-review-create'
import BaseModal from '@components/modal/alert-modal'

const ReviewWriteForm = () => {
  const {handleNextPage, handlePrevPage, prograss} = useReviewFormPreNext({
    index: 0,
  })
  const {handleSubmit, isOpen, handleClose} = usePostReviewCreate()

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <ReviewFormProgassState prograss={prograss} />
        {prograss === 0 && <ReviewFormFirst />}
        {prograss === 1 && <ReviewFormSecond />}
        {prograss === 2 && <ReviewFormLast />}
        <ReviewFormPreNext
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          prograss={prograss}
        />
      </Container>
      <BaseModal
        open={isOpen}
        handleClose={handleClose}
        title="리뷰 작성 완료!"
        description="이제 내가 올린 리뷰를 확인할 수 있어요"
        buttonText="확인"
      />
    </form>
  )
}

export default ReviewWriteForm

const Container = styled(Box)({
  width: '420px',
  margin: 'auto',
})
