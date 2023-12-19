import {Box, styled} from '@mui/material'
import ReviewFormFirst from './review-form-first'
import ReviewFormSecond from './review-form-second'
import ReviewFormLast from './review-form-last'
import ReviewFormProgassState from './review-form-prograss-state'
import useReviewFormPreNext from './hooks/use-review-form-pre-nex'
import ReviewFormPreNext from './review-form-pre-next'
import usePostReviewCreate from './hooks/use-post-review-create'
import BaseModal from '@components/modal/base-modal'

const ReviewWriteForm = () => {
  const {handleNextPage, handlePrevPage, prograss} = useReviewFormPreNext({
    index: 0,
  })
  const {uploadeFiles, formValues, isOpen, handleClose} = usePostReviewCreate()

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 선택된 값에 따른 작업 수행
    for (const item in formValues) {
      if (formValues[item] === undefined || formValues[item] === '') {
        alert(` 프로퍼티가 비어 있습니다.`)
        return
      }
    }
    const formData = new FormData()
    formData.append('file', formValues.thumbnails[0])
    uploadeFiles(formData)
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
