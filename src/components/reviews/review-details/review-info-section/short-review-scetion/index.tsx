import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SubTitle from '../../sub-title'

interface IfProps {
  shortReview: string
}

const SortReviewSection = ({shortReview}: IfProps) => {
  return (
    <Box sx={{marginBottom: '16px'}}>
      <SubTitle title="한줄 평" />
      <Typography variant="body3" component="p">
        {shortReview}
      </Typography>
    </Box>
  )
}

export default SortReviewSection
