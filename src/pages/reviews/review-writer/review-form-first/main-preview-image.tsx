import AddCircleIcon from '@mui/icons-material/AddCircle'
import {Box, Typography, styled} from '@mui/material'
import DeleteIcon from '@mui/icons-material/HighlightOff'
import {useEffect, useState} from 'react'
interface IfMainPreviewImageProps {
  formValues: any
  handleThumbnailDelete: any
}

const MainPreviewImage = ({
  formValues,
  handleThumbnailDelete,
}: IfMainPreviewImageProps) => {
  const [image, setImage] = useState('')

  const deleteAll = () => {
    URL.revokeObjectURL(image)
    setImage('')
    handleThumbnailDelete(formValues.thumbnails[0])
  }

  useEffect(() => {
    const transformFile = () => {
      const url = URL.createObjectURL(formValues.thumbnails[0])

      setImage(url)
    }
    if (formValues.thumbnails[0]) {
      transformFile()
    } else {
      setImage('')
    }
  }, [formValues.thumbnails, image.length])

  return (
    <MainPreview>
      <MainPreviewFileLabel htmlFor="thumbnails">
        <ViewImage
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <TextBox>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                alignItems: 'center',
              }}
            >
              <AddCircleIcon />
              <Typography
                variant="h3"
                fontStyle={{textAlign: 'center', color: '#dbdbdb'}}
              >
                리뷰에서 보여줄 <br />
                사진이나 영상을 추가해주세요.
              </Typography>
            </Box>
          </TextBox>
        </ViewImage>
      </MainPreviewFileLabel>
      {formValues.thumbnails[0] && <CustomDeleteButton onClick={deleteAll} />}
    </MainPreview>
  )
}

export default MainPreviewImage

const ViewImage = styled('figure')({
  position: 'relative',
  height: '100%',
})

const TextBox = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%,-50%)',
})

const MainPreview = styled(Box)({
  marginTop: '20px',
  height: '420px',
  borderRadius: '20px',
  border: '2px dashed #dbdbdb',
  position: 'relative',
})

const MainPreviewFileLabel = styled('label')({
  width: '100%',
  cursor: 'pointer',
})
const CustomDeleteButton = styled(DeleteIcon)({
  position: 'absolute',
  top: -20,
  right: -20,
  border: '1px solid #fff',
  color: '#000;',
})
