import {
  Box,
  List,
  Typography,
  FormControl,
  styled as muiStyled,
} from '@mui/material'
import useReviewForm from '../hooks/use-review-form'
import MainPreviewImage from './main-preview-image'
import SubPreviewImage from './sub-preview-image'

const ReviewFormFirst = () => {
  const {formValues, handleThumbnailUpload, handleThumbnailDelete} =
    useReviewForm()

  const ImageLength = ({formValues}: any) => {
    const files = formValues.thumbnails.length
    return (
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 400,
          padding: '4px 12px',
          borderRadius: ' 13.5px;',
          width: '49px',
          height: ' 27px',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="body2"> {files}/5</Typography>
      </Box>
    )
  }
  return (
    <main>
      <FormControl component="fieldset" sx={{width: '100%', margin: 'auto'}}>
        <Box sx={{position: 'relative', margin: 'auto', width: '420px'}}>
          <MainPreviewImage
            formValues={formValues}
            handleThumbnailDelete={handleThumbnailDelete}
          />
          <SubPreview>
            <Box>
              <SubPreviewList>
                {[1, 2, 3, 4].map(value => (
                  <>
                    <SubPreviewImage
                      formValues={formValues}
                      handleThumbnailDelete={handleThumbnailDelete}
                      value={value}
                    />
                  </>
                ))}
              </SubPreviewList>
            </Box>
          </SubPreview>
          <ImageLength formValues={formValues} />
        </Box>
      </FormControl>
      <MainPreviewFileInput
        type="file"
        name="thumbnails"
        id="thumbnails"
        accept=".jpg, .png"
        onChange={handleThumbnailUpload}
      />
    </main>
  )
}

export default ReviewFormFirst

const MainPreviewFileInput = muiStyled('input')({
  display: 'none',
})

const SubPreview = muiStyled(Box)({
  marginTop: '14px',
})

const SubPreviewList = muiStyled(List)({
  display: 'flex',
  justifyContent: 'space-between',
})
