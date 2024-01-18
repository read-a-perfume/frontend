import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import {createSvgIcon, styled} from '@mui/material'
import {useEffect, useState} from 'react'
import {IfSubPreviewImageProps} from '../../types'

const SubPreviewImage = ({
  thumbnailsFiles,
  handleThumbnailDelete,
  value,
}: IfSubPreviewImageProps) => {
  const [image, setImage] = useState('')

  const deleteAll = () => {
    URL.revokeObjectURL(image)
    setImage('')
    handleThumbnailDelete(thumbnailsFiles[value])
  }
  useEffect(() => {
    const transformFile = () => {
      const url = URL.createObjectURL(thumbnailsFiles[value])

      setImage(url)
    }
    if (thumbnailsFiles[value]) {
      transformFile()
    } else {
      setImage('')
    }
  }, [thumbnailsFiles, value])

  return (
    <ViewImage
      sx={{
        //프리뷰 이미지
        backgroundImage: `url(${image})`,
      }}
    >
      <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}} />
      {image.length > 0 && (
        <CancelIcon
          sx={{position: 'absolute', top: 0, right: 0}}
          onClick={deleteAll}
        />
      )}
    </ViewImage>
  )
}

export default SubPreviewImage

const ViewImage = styled(ListItem)({
  position: 'relative',
  width: '96px',
  height: '96px',
  borderRadius: '10px',
  border: ' solid 1px #dbdbdb',
  backgroundColor: '#fff',
  justifyContent: 'center',
  //이미지
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

const CancelIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect width="24" height="24" rx="12" fill="white" />
    <path
      d="M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z"
      fill="#191919"
    />
  </svg>,
  'Cancel',
)
