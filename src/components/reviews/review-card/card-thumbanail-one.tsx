import {CardMedia} from '@mui/material'

interface IfCardThumbnailOneProps {
  thumbnails: string
}

const CardThumbnailOne = ({thumbnails}: IfCardThumbnailOneProps) => {
  return (
    <CardMedia
      component="img"
      height="138"
      image={thumbnails}
      alt="Image"
      sx={{borderRadius: '12px'}}
    />
  )
}
export default CardThumbnailOne