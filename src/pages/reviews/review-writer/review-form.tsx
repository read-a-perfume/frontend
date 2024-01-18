import styled from '@mui/material/styles/styled'
import ReviewFormProgassState from './review-form-prograss-state'
import useReviewFormPreNext from './hooks/use-review-form-pre-nex'
import usePostReviewCreate from './hooks/use-post-review-create'
import BaseModal from '@components/modal/alert-modal'
import {FormProvider, useForm} from 'react-hook-form'
import {IfReviewRequest} from 'types/review.interface'
import ReviewFormContent from './review-form-content'
import ReviewFormNavButtons from './review-form-nav-buttons'
import Box from '@mui/material/Box'

const ReviewRequest = {
  perfume: {
    id: 0,
    name: '',
  },
  dayType: '',
  strength: 'LIGHT',
  season: '',
  duration: '',
  shortReview: '',
  fullReview: '',
  keywords: [],
  thumbnails: [],
}

const ReviewForm = () => {
  const {handleNextPage, handlePrevPage, prograss} = useReviewFormPreNext({
    index: 0,
  })
  const {onSubmit, isOpen, handleClose} = usePostReviewCreate()

  const methods = useForm<IfReviewRequest>({defaultValues: ReviewRequest})

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <ReviewFormProgassState prograss={prograss} />
          <ReviewFormContent prograss={prograss} />
          <ReviewFormNavButtons
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
    </FormProvider>
  )
}

export default ReviewForm

const Container = styled(Box)({
  width: '420px',
  margin: 'auto',
})
