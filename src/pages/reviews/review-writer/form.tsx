import {Box, styled} from '@mui/material'
import ReviewFormFirst from './review-form-first'
import ReviewFormSecond from './review-form-second'
import ReviewFormLast from './review-form-last'
import ReviewFormProgassState from './review-form-prograss-state'
import useReviewFormPreNext from './hooks/use-review-form-pre-nex'
import ReviewFormPreNext from './review-form-pre-next'
import useReviewForm from './hooks/use-review-form'
import {ReviewWriterFormProps} from './form.interface'
// import useMutation from 'src/store/server/use-mutation'
// import {fetchReviewCreate} from 'src/store/server/reviews/mutations'

const formData: ReviewWriterFormProps = {
  perfumeId: 1,
  dayType: '',
  strength: '',
  season: '',
  duration: '',
  shortReview: '',
  fullReview: '',
  keywords: [],
  thumbnails: [],
}

const Form = () => {
  const {handleNextPage, handlePrevPage, prograss} = useReviewFormPreNext({
    index: 0,
  })
  const {
    formValues,
    handleThumbnailDelete,
    handleThumbnailUpload,
    handleFormDataChange,
    handleMultipleCheckBox,
    handleAutoComplete,
  } = useReviewForm({formData})

  //리뷰 이미지 업로드
  //리뷰 이미지 삭제

  // const {mutate} = useMutation({
  //   mutationFn: fetchReviewCreate,
  //   mutationKey: ['post'],
  // })

  const handleSubmit = event => {
    event.preventDefault()
    // 선택된 값에 따른 작업 수행

    const formData = new FormData(event.current.target)

    // 다른 formValues를 append하는 부분
    formData.append('duration', formValues.duration.toString())
    formData.append('tags', formValues.tags.toString())
    formData.append('dayType', formValues.dayType)
    formData.append('seaseon', formValues.season)
    formData.append('perfumeId', formValues.perfumeId)
    formData.append('feeling', formValues.feeling)

    // files 배열을 append하는 부분
    formValues.thumbnails.forEach((file, index) => {
      formData.append(`file-${index + 1}`, file)
    })
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <ReviewFormProgassState prograss={prograss} />
        {prograss === 0 && (
          <ReviewFormFirst
            formValues={formValues}
            handleThumbnailUpload={handleThumbnailUpload}
            handleThumbnailDelete={handleThumbnailDelete}
          />
        )}
        {prograss === 1 && (
          <ReviewFormSecond
            handleFormDataChange={handleFormDataChange}
            handleNextPage={handleNextPage}
            handleAutoComplete={handleAutoComplete}
            formValues={formValues}
          />
        )}
        {prograss === 2 && (
          <ReviewFormLast
            formValues={formValues}
            handleFormDataChange={handleFormDataChange}
            handleMultipleCheckBox={handleMultipleCheckBox}
          />
        )}
        <ReviewFormPreNext
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          prograss={prograss}
        />
      </Container>
    </form>
  )
}

export default Form

const Container = styled(Box)({
  width: '420px',
  margin: 'auto',
})
