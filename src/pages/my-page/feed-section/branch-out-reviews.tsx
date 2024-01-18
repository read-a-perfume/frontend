import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import {IfReviewContent} from 'types/review.interface'
import ThereAreNoReviews from './there-is-are-reviews'
import FeedCard from './feed-card/feed-card'
import FeedAddCard from './feed-card/feed-add-card'

interface proptype {
  reviews: IfReviewContent[] | undefined
}

const BranchoutReviews = ({reviews}: proptype) => {
  if (reviews === undefined) {
    return <></>
  }
  if (reviews.length === 0) {
    return <ThereAreNoReviews />
  }
  console.log(reviews)
  return (
    <ReviewsContainer>
      {reviews.map((e, i) => (
        <FeedCard data={e} key={i} />
      ))}
      <FeedAddCard />
    </ReviewsContainer>
  )
}

export default BranchoutReviews

const ReviewsContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '24px',
  flexWrap: 'wrap',
}))
