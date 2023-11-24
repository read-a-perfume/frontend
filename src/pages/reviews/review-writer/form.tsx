import styled from '@emotion/styled'
import WriterSecond from './writer-second'
import WriterProgassBar from './writer-prograss-bar'
import {Box, Button} from '@mui/material'
import WriterThird from './writer-third'
import WriterFirst from './writer-first'
import useWriter from './hooks/use-writer'
import {useState} from 'react'

const Form = () => {
  const [prograss, setPrograss] = useState(0)
  const {
    formValues,
    handleThumbnailDelete,
    handleThumbnailUpload,
    handleFormDataChange,
    handleMultipleCheckBox,
  } = useWriter()

  //리뷰 이미지 업로드

  //리뷰 이미지 삭제

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
    formValues.files.forEach((file, index) => {
      formData.append(`file-${index + 1}`, file)
    })
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
  }

  const handleNextPage = () => {
    setPrograss(pre => (pre < 2 ? pre + 1 : pre))
  }
  const handlePrevPage = () => {
    setPrograss(pre => (pre > 0 ? pre - 1 : pre))
  }

  //향수 리뷰 적는곳]
  console.log(formValues, 'formValues')
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <WriterProgassBar prograss={prograss} />
        {prograss === 0 && (
          <WriterFirst
            formValues={formValues}
            handleThumbnailUpload={handleThumbnailUpload}
            handleThumbnailDelete={handleThumbnailDelete}
          />
        )}
        {prograss === 1 && (
          <WriterSecond
            handleFormDataChange={handleFormDataChange}
            handleNextPage={handleNextPage}
            formValues={formValues}
          />
        )}
        {prograss === 2 && (
          <WriterThird
            formValues={formValues}
            handleFormDataChange={handleFormDataChange}
            handleMultipleCheckBox={handleMultipleCheckBox}
          />
        )}
        <Box sx={{display: 'flex', gap: '10px', marginTop: '20px'}}>
          <Button
            sx={{
              width: '156px',
              height: '56px;',
              display: ' flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              backgroundColor: '#f1f1f5',
            }}
            onClick={handlePrevPage}
          >
            이전
          </Button>
          <Button
            sx={{
              width: '252px;',
              height: '56px;',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              backgroundColor: '#f1f1f5',
            }}
            onClick={handleNextPage}
          >
            다음으로
          </Button>
        </Box>
      </Container>
    </form>
  )
}

export default Form

const Container = styled.div({
  width: '420px',
  margin: 'auto',
})
