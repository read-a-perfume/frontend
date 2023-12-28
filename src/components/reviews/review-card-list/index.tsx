import FlexBox from '@layouts/flex-box'
import {IfReviewContent} from 'types/review.interface'
import ReviewCard from '../review-card'

interface IfProps {
  content: IfReviewContent[]
}

const ReviewCardList = ({content}: IfProps) => {
  return (
    <FlexBox
      gap="24px"
      style={{marginTop: '24px', flexWrap: 'wrap', width: '1200px'}}
    >
      <>
        <>
          {content &&
            content?.length > 0 &&
            content.map(item => <ReviewCard key={item.id} {...item} />)}
        </>
      </>
    </FlexBox>
  )
}

export default ReviewCardList
