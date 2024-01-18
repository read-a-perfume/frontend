import Box from '@mui/material/Box'
import List from '@mui/material/List'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import styled from '@mui/material/styles/styled'
import MainPreviewImage from './main-preview-image'
import SubPreviewImage from './sub-preview-image'
import {useWatch} from 'react-hook-form'
import FileLengthView from './file-length-view'
import useFormValidateReview from '../../hooks/use-form-validate-review'
import {ChangeEvent} from 'react'

const PhotoUpload = () => {
  const {thumbnails, control} = useFormValidateReview()
  const {field} = thumbnails
  //업로드한 파일 데이터 목록
  const thumbnailsFiles = useWatch({control: control, name: 'thumbnails'}) || []
  //파일 사이즈 측정
  const measureFileSize = (file: File | null) => {
    const fileSizeLimit = 1 * 1024 * 1024
    return file && file.size <= fileSizeLimit
  }
  //파일 업로드
  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const file = target.files && target.files[0]
    const newFiles = [...thumbnailsFiles]
    //파일이 없다면  return
    if (!file) return

    //파일 사이즈 측정
    if (!measureFileSize(file)) {
      alert('1MB 이하의 이미지만 올려주세요')
      return false
    }
    // 파일 추가 규칙
    if (newFiles.length > 0) {
      const index = newFiles.findIndex(x => x === file)

      if (newFiles.length > 3) {
        alert('최대 4개까지 입니다.')
        return false
      }

      if (index === -1) {
        newFiles.push(file)
      } else {
        newFiles.splice(index, 1)
      }
    } else {
      newFiles.push(file)
    }

    field.onChange(newFiles)
  }

  //파일 삭제
  const handleDelete = (file: File) => {
    const filteredItems = thumbnailsFiles.filter(
      thumbnailsFile => thumbnailsFile !== file && thumbnailsFile,
    )
    field.onChange(filteredItems)
  }

  return (
    <main>
      <FormControl component="fieldset" sx={{width: '100%', margin: 'auto'}}>
        <PreviewFileLabel htmlFor="file">업로드</PreviewFileLabel>
        <Box sx={{position: 'relative', margin: 'auto', width: '420px'}}>
          <MainPreviewImage
            thumbnailsFiles={
              thumbnailsFiles[thumbnailsFiles.length - 1] as File
            }
          />
          <SubPreview>
            <SubPreviewList>
              {[0, 1, 2, 3].map(value => (
                <SubPreviewImage
                  thumbnailsFiles={thumbnailsFiles as File[]}
                  handleThumbnailDelete={handleDelete}
                  value={value}
                  key={value}
                />
              ))}
            </SubPreviewList>
          </SubPreview>
          <FileLengthView thumbnailsFiles={thumbnailsFiles} />
        </Box>
        <PreviewFileInput
          type="file"
          name={field.name}
          ref={field.ref}
          required={false}
          onChange={handleUpload}
          inputProps={{
            accept: 'image/png, image/gif, image/jpeg',
          }}
          id="file"
        />
      </FormControl>
    </main>
  )
}

export default PhotoUpload

const PreviewFileLabel = styled('label')(({theme}) => ({
  display: 'block',
  width: 'fit-content',
  padding: '9px 14px',
  backgroundColor: theme.palette.primary.main,
  fontSize: '14px',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
}))

const PreviewFileInput = styled(TextField)({
  display: 'none',
}) as typeof TextField

const SubPreview = styled(Box)({
  marginTop: '14px',
})

const SubPreviewList = styled(List)({
  display: 'flex',
  justifyContent: 'space-between',
})
