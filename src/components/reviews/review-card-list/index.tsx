import FlexBox from '@layouts/flex-box'
import {IfReviewContent} from 'types/review.interface'
import ReviewCard from '../review-card'
import Nothing from '@components/base/nothing'

interface IfProps {
  content: IfReviewContent[]
}

const ReviewCardList = ({content}: IfProps) => {
  return (
    <FlexBox
      gap="24px"
      style={{marginTop: '24px', flexWrap: 'wrap', width: '1200px'}}
    >
      {content.length > 0 ? (
        content.map(item => <ReviewCard key={item.id} {...item} />)
      ) : (
        <Nothing />
      )}
    </FlexBox>
  )
}

export default ReviewCardList
