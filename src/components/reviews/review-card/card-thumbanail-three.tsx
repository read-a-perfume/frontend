import FlexBox from '@layouts/flex-box'
import {Box, CardMedia, Typography, styled} from '@mui/material'

interface IfCardThumbnailProps {
  thumbnails: string[]
}

const CardThumbnailThree = ({thumbnails}: IfCardThumbnailProps) => {
  return (
    <FlexBox justifyContent="center">
      {/* 첫 번째 이미지 */}
      <CardMedia
        component="img"
        height="138px"
        // width="347px"
        image={thumbnails[0]}
        alt="Image"
        sx={{borderRadius: '12px', width: 229, marginRight: '12px'}}
      />

      {/* 나머지 이미지 */}
      <Box
        sx={{
          position: 'relative',
          width: '106px',
          height: '100%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#FFF',
          }}
        >
          <LengthText>{`+${thumbnails.length - 2}`}</LengthText>
        </Box>

        <CardMedia
          component="img"
          height="138px"
          // width="347px"
          image={thumbnails[1]}
          alt="Image"
          sx={{borderRadius: '12px'}}
        />
      </Box>
    </FlexBox>
  )
}
export default CardThumbnailThree
const LengthText = styled(Typography)({
  color: '#FFF',
  fontSize: '16.5px',
  fontWeight: '400',
})
