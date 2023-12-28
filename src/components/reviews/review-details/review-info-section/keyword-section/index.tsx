import {Box} from '@mui/material'
import ReviewKeyword from '../review-keyword'
import {IfReviewDetailResponse} from 'types/review.interface'

type ShortReview = Pick<IfReviewDetailResponse, "keywords">;

const KeywordSection = ({keywords}: ShortReview) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      {keywords.length > 0 &&
        keywords.map(item => <ReviewKeyword title={item} />)}
      <ReviewKeyword title="밝음" />
    </Box>
  )
}

export default KeywordSection
