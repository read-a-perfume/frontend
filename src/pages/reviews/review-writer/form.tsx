import styled from '@emotion/styled'
import {useState} from 'react'
import FormWriterStart from './form-writer-start'
import FormWriterLast from './form-writer-last'
import FormImageUpload from './form-image-upload'
import useReviewWriterArrow from '@hooks/global-store/client/atoms/use-review-writer-arrow'
import {ReviewWriterFormProps} from './form.interface'

const tags = [
  '자연적인',
  '달달한',
  '여름',
  '상큼한',
  '과일',
  '가을',
  '우아한',
  '고급진',
]

const Form = () => {
  const {handleNextPage, pageMove} = useReviewWriterArrow()
  const [formValues, setFormValues] = useState<ReviewWriterFormProps>({
    perfumeId: '',
    dayType: '',
    strength: '',
    season: '',
    duration: 0,
    shortReview: '',
    feeling: '',
    tags: [],
    files: ['', '', '', '', ''],
  })

  const handleFormDataChange = (event, value) => {
    const target = event.target
    const name = target.name

    if (name === 'perfumeId') {
      setFormValues({
        ...formValues,
        ['perfumeId']: value,
      })
    }
    setFormValues({
      ...formValues,
      [name]: target.value,
    })
  }

  //최대 3개까지 가능한 체크박스
  const handleMultipleCheckBox = event => {
    const target = event.target
    const name = target.name
    //체크박스 최대 3개까지 선택가능
    if (tags.includes(event.target.name)) {
      //중복 체크는 취소하도록 필터링
      const filter = formValues.tags.filter(keyword => keyword !== name)

      if (formValues.tags.length !== filter.length) {
        setFormValues({
          ...formValues,
          ['tags']: [...filter],
        })
        return
      }
      //최대 3개까지
      if (formValues.tags.length < 3) {
        setFormValues({
          ...formValues,
          ['tags']: [name, ...formValues.tags],
        })
      }
      //3개이상이면 마지막께 취소되고 새로운 키워드가 선택
      if (formValues.tags.length >= 3) {
        const updatedtags = [...formValues.tags.slice(0, 2), name]
        setFormValues({
          ...formValues,
          ['tags']: updatedtags,
        })
        return
      }
      return
    }
  }

  //리뷰 이미지 업로드
  const handleThumbnailUpload = event => {
    const target = event.target
    const file = target.files[0]
    const fileSizeLimit = 1 * 1024 * 1024
    const url = URL.createObjectURL(file)
    if (file && file.size <= fileSizeLimit) {
      setFormValues({
        ...formValues,
        ['files']: [url, ...formValues.files.slice(0, 4)],
      })
      return
    } else {
      alert('4MB 이하의 이미지만 올려주세요')
    }
  }

  //리뷰 이미지 삭제

  const handleThumbnailDelete = file => {
    //삭제할 아이템 필터링
    const filteredItems = formValues.files.filter(it => it !== file && it)
    const arrBlank = Array.from(
      Array(formValues.files.length - filteredItems.length),
      () => '',
    )

    setFormValues({
      ...formValues,
      ['files']: [...filteredItems, ...arrBlank],
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // 선택된 값에 따른 작업 수행
    const formData = new FormData(event.currentTarget)

    // 다른 formValues를 append하는 부분
    formData.append('duration', formValues.duration.toString())
    formData.append('tags', formValues.tags.toString())
    formData.append('dayType', formValues.dayType)
    formData.append('seaseon', formValues.season)
    formData.append('perfumeId', formValues.perfumeId)
    formData.append('feeling', formValues.feeling)

    // files 배열을 append하는 부분
    formValues.files.forEach((file, index) => {
      formData.append(`file-${index + 1}`, file)
    })
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
  }

  //향수 리뷰 적는곳]

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FormImageUpload
          handleThumbnailDelete={handleThumbnailDelete}
          handleThumbnailUpload={handleThumbnailUpload}
          files={formValues.files}
        />

        {pageMove === 0 ? (
          <FormWriterStart
            handleFormDataChange={handleFormDataChange}
            handleNextPage={handleNextPage}
            formValues={formValues}
          />
        ) : (
          <FormWriterLast
            formValues={formValues}
            handleMultipleCheckBox={handleMultipleCheckBox}
            handleFormDataChange={handleFormDataChange}
          />
        )}
      </Container>
    </form>
  )
}

export default Form

const Container = styled.div({
  display: 'flex',
  gap: '33px',
})
