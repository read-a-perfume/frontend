import CardMedia from '@mui/material/CardMedia'

const CardThumbnailDefault = () => {
  return (
    <CardMedia
      component="img"
      height="138px"
      width="347px"
      image={'/images/no-image.jpg'}
      alt="Image"
      sx={{borderRadius: '12px'}}
    />
  )
}
export default CardThumbnailDefault
