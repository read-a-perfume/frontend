import {Box, styled} from '@mui/material'
import ReviewFormFirst from './review-form-first'
import ReviewFormSecond from './review-form-second'
import ReviewFormLast from './review-form-last'
import ReviewFormProgassState from './review-form-prograss-state'
import useReviewFormPreNext from './hooks/use-review-form-pre-nex'
import ReviewFormPreNext from './review-form-pre-next'
import useReviewForm from './hooks/use-review-form'
import {fetchReviewCreate} from 'src/store/server/reviews/mutations'
import useMutation from 'src/store/server/use-mutation'

const ReviewWriteForm = () => {
  const {handleNextPage, handlePrevPage, prograss} = useReviewFormPreNext({
    index: 0,
  })
  const {formValues} = useReviewForm()

  const {mutate: createReview} = useMutation({
    mutationFn: fetchReviewCreate,
    mutationKey: ['review-write'],
    options: {
      onError: error => console.log(error, 'error'),
    },
  })

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 선택된 값에 따른 작업 수행

    formValues

    createReview(formValues)
  }

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
    </form>
  )
}

export default ReviewWriteForm

const Container = styled(Box)({
  width: '420px',
  margin: 'auto',
})
