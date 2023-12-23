import FlexBox from '@layouts/flex-box'
import {CardMedia} from '@mui/material'

interface IfCardThumbnailProps {
  thumbnails: string[]
}

const CardThumbnailTwo = ({thumbnails}: IfCardThumbnailProps) => {
  return (
    <FlexBox justifyContent="center">
      {/* 첫 번째 이미지 */}
      <CardMedia
        component="img"
        height="138"
        image={thumbnails[0]}
        alt="Image"
        sx={{
          borderRadius: '12px',
          width: '50%',
          marginRight: '12px',
        }}
      />

      {/* 두 번째 이미지 */}
      <CardMedia
        component="img"
        height="138"
        image={thumbnails[1]}
        alt="Image"
        sx={{borderRadius: '12px', width: '50%'}}
      />
    </FlexBox>
  )
}
export default CardThumbnailTwo
