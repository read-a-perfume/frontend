import {Box, Stack, styled} from '@mui/material'
import FeedChip from '../base/feed-chip'
import PageNumber from '../../../components/base/page-number-button'
import { getReviews } from './queryfn'
import { useQuery } from '@tanstack/react-query'
import FeedCard from './feed-card/feed-card'


const FeedSection = () => {
  /*
  TODO
  chip은 초기에 ALL,페이지는 초기에 1로 초기화된다.
  chip을 클릭하면 chip을 active시키고 해당하는 카드 데이터를 받아온다.
  페이지네이션: 각 페이지넘버를 클릭할때 마다 페이지넘버를 active해준다. 해당하는 페이지의 카드들의 데이터를 받고 렌더링해준다.
 
  */
  const {data: reviews} = useQuery(['reviews'], () => getReviews(1))

  return (
    <div>
      <Stack direction="row" sx={{marginBottom: '48px'}}>
        <FeedChip label="ALL" clickable active={false}></FeedChip>
        <FeedChip label="내가 작성한 피드" clickable active></FeedChip>
        <FeedChip label="좋아요" clickable active={false}></FeedChip>
      </Stack>
      <ReviewsContainer>
       {reviews && reviews.map((e,i)=><FeedCard data={e} key={i}/>)} 
      </ReviewsContainer>
      <TestPageNumber>
        <PageNumber active={true} number={1} />
        <PageNumber active={false} number={2} />
        <PageNumber active={false} number={3} />
      </TestPageNumber>
    </div>
  )
}

export default FeedSection

const TestPageNumber = styled(Box)(() => ({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  marginTop: '130px',
}))

const ReviewsContainer = styled(Box)(()=>(
  {
    display:'flex',
    gap: '32px',
    flexWrap: 'wrap',
  }
))
