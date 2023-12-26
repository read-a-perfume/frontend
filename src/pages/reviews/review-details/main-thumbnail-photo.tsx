import {Box, styled} from '@mui/material'

interface IfProps {
  thumbnail: string[]
}

const MainThumbnailPhoto = ({thumbnail}: IfProps) => {
  return (
    <Box
      sx={{
        width: '486px',
        height: '486px',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundImage: `url(${thumbnail[0]})`,
      }}
    >
      <ViewThumbanil>메인 사진 이미지</ViewThumbanil>
    </Box>
  )
}

export default MainThumbnailPhoto

const ViewThumbanil = styled(Box)({})
