import {Box} from '@mui/material'
import FullReviewSection from './full-review-section'
import KeywordSection from './keyword-section'
import PerfumeInfoSection from './perfume-info-section'
import SortReviewSection from './short-review-scetion'
import {IfReviewDetailResponse} from 'types/review.interface'

const ReviewInfoSection = ({...reviewDetails}: IfReviewDetailResponse) => {
  const {
    shortReview,
    fullReview,
    keywords,
    dayType,
    strength,
    season,
    duration,
  } = reviewDetails
  return (
    <>
      <SortReviewSection shortReview={shortReview} />
      <FullReviewSection description={fullReview} />
      <KeywordSection keywords={keywords} />
      <Box sx={{border: '1px solid #ededed', margin: '23px 0'}} />
      <PerfumeInfoSection
        dayType={dayType}
        strength={strength}
        duration={duration}
        season={season}
      />
    </>
  )
}
export default ReviewInfoSection
