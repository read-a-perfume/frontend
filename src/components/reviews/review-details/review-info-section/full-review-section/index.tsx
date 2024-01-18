import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SubTitle from '../../sub-title'

const FullReviewSection = ({description}: {description: string}) => {
  return (
    <Box>
      <SubTitle title="상세 리뷰" />
      <Typography
        variant="body3"
        component="p"
        sx={{
          height: '92px',
          maxHeight: '92px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4, // 원하는 줄 수로 설정
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default FullReviewSection
