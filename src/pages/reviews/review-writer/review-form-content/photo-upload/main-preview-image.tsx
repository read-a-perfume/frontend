import {Box, Typography, styled} from '@mui/material'
import {useEffect, useState} from 'react'
interface IfMainPreviewImageProps {
  thumbnailsFiles: any
}

const MainPreviewImage = ({thumbnailsFiles}: IfMainPreviewImageProps) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    const transformFile = () => {
      const url = URL.createObjectURL(thumbnailsFiles)

      setImage(url)
    }
    if (thumbnailsFiles) {
      transformFile()
    } else {
      setImage('')
    }
  }, [thumbnailsFiles, image.length])

  return (
    <MainPreview>
      <MainPreviewFileLabel>
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
    </MainPreview>
  )
}

export default MainPreviewImage

const ViewImage = styled('figure')({
  position: 'relative',
  height: '100%',
  margin: 0,
})

const TextBox = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%,-50%)',
  zIndex: -1,
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
})
