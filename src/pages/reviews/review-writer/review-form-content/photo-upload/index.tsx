import {
  Box,
  List,
  FormControl,
  styled as muiStyled,
  TextField,
} from '@mui/material'
import MainPreviewImage from './main-preview-image'
import SubPreviewImage from './sub-preview-image'
import useGetCustomForms from '../../hooks/use-get-custom-forms'
import {useWatch} from 'react-hook-form'
import FileLengthView from './file-length-view'

const PhotoUpload = () => {
  const {thumbnails, control} = useGetCustomForms()
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
        <Box sx={{position: 'relative', margin: 'auto', width: '420px'}}>
          <MainPreviewImage
            thumbnailsFiles={thumbnailsFiles}
            handleThumbnailDelete={handleDelete}
          />
          <SubPreview>
            <SubPreviewList>
              {[1, 2, 3, 4].map(value => (
                <SubPreviewImage
                  thumbnailsFiles={thumbnailsFiles}
                  handleThumbnailDelete={handleDelete}
                  value={value}
                />
              ))}
            </SubPreviewList>
          </SubPreview>
          <FileLengthView thumbnailsFiles={thumbnailsFiles} />
        </Box>
      </FormControl>
      <MainPreviewFileInput
        type="file"
        id="thumbnails"
        name={field.name}
        ref={field.ref}
        onChange={handleUpload}
      />
    </main>
  )
}

export default PhotoUpload

const MainPreviewFileInput = muiStyled(TextField)({
  display: 'none',
}) as typeof TextField

const SubPreview = muiStyled(Box)({
  marginTop: '14px',
})

const SubPreviewList = muiStyled(List)({
  display: 'flex',
  justifyContent: 'space-between',
})
