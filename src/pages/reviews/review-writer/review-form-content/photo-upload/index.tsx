import {
  Box,
  List,
  FormControl,
  styled as muiStyled,
  TextField,
} from '@mui/material'
import MainPreviewImage from './main-preview-image'
import SubPreviewImage from './sub-preview-image'
import {useWatch} from 'react-hook-form'
import FileLengthView from './file-length-view'
import useFormValidateReview from '../../hooks/use-form-validate-review'

const PhotoUpload = () => {
  const {thumbnails, control} = useFormValidateReview()
  const {field} = thumbnails
  //업로드한 파일 데이터 목록
  const thumbnailsFiles = useWatch({control: control, name: 'thumbnails'}) || []

  //파일 업로드
  const handleUpload = event => {
    const target = event.target
    const file = target.files[0]
    // const fileSizeLimit = 1 * 1024 * 1024
    const newArray = [...thumbnailsFiles]
    const item = file
    if (newArray.length > 0) {
      const index = newArray.findIndex(x => x === item)

      if (newArray.length > 3) {
        alert('최대 4개까지 입니다.')
        return false
      }

      if (index === -1) {
        newArray.push(item)
      } else {
        newArray.splice(index, 1)
      }
    } else {
      newArray.push(item)
    }

    field.onChange(newArray)
  }

  //파일 삭제
  const handleDelete = file => {
    const filteredItems = thumbnailsFiles.filter(it => it !== file && it)
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

const PreviewFileLabel = muiStyled('label')(({theme}) => ({
  display: 'block',
  width: 'fit-content',
  padding: '9px 14px',
  backgroundColor: theme.palette.primary.main,
  fontSize: '14px',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
}))

const PreviewFileInput = muiStyled(TextField)({
  display: 'none',
}) as typeof TextField

const SubPreview = muiStyled(Box)({
  marginTop: '14px',
})

const SubPreviewList = muiStyled(List)({
  display: 'flex',
  justifyContent: 'space-between',
})
