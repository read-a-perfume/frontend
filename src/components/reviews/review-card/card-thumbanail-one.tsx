import CardMedia from '@mui/material/CardMedia'

interface IfCardThumbnailOneProps {
  thumbnails: string
}

const CardThumbnailOne = ({thumbnails}: IfCardThumbnailOneProps) => {
  return (
    <CardMedia
      component="img"
      height="138px"
      width="347px"
      image={thumbnails}
      alt="Image"
      sx={{borderRadius: '12px'}}
    />
  )
}
export default CardThumbnailOne
