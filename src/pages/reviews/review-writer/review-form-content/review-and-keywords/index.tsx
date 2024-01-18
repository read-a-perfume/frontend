import FormControl from '@mui/material/FormControl'
import ShortReview from './short-review'
import FullReview from './full-review'
import PerfumeKeywords from './perfume-keywords'

const ReviewAndKeywords = () => {
  return (
    <FormControl component="fieldset">
      <ShortReview title="한줄 리뷰 *" />
      <FullReview title="상세 리뷰" />
      <PerfumeKeywords title="향수와 어울리는 키워드를 선택해주세요. *  (최대 3개)" />
    </FormControl>
  )
}

export default ReviewAndKeywords
