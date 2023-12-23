import {ListItem, ListItemIcon, styled} from '@mui/material'
import {useEffect, useState} from 'react'
import DeleteIcon from '@mui/icons-material/HighlightOff'
interface IfMainPreviewImageProps {
  thumbnailsFiles: any
  handleThumbnailDelete: any
  value: number
}

const SubPreviewImage = ({
  thumbnailsFiles,
  handleThumbnailDelete,
  value,
}: IfMainPreviewImageProps) => {
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
      {image.length > 0 && <CustomDeleteButton onClick={deleteAll} />}
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
const CustomDeleteButton = styled(DeleteIcon)({
  position: 'absolute',
  top: -20,
  right: -20,
  border: '1px solid #fff',
  color: '#000;',
})
