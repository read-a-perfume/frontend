import {CardMedia} from '@mui/material'

const CardThumbnailDefault = () => {
  return (
    <CardMedia
      component="img"
      height="138"
      image={'/images/no-image.jpg'}
      alt="Image"
      sx={{borderRadius: '12px'}}
    />
  )
}
export default CardThumbnailDefault
