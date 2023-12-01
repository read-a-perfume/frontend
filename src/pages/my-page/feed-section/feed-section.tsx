import {Box, Stack} from '@mui/material'
import FeedChip from '../base/feed-chip'
import {TEMP_EACH_FEED} from '../data/each-feed-data'
import FeedCard from './feed-card/feed-card'
import PageNumber from './page-number'
import styled from '@emotion/styled'
import Card from '@components/base/card'

const FeedSection = () => {
  /*
  TODO
  chip은 초기에 ALL,페이지는 초기에 1로 초기화된다.
  chip을 클릭하면 chip을 active시키고 해당하는 카드 데이터를 받아온다.
  페이지네이션: 각 페이지넘버를 클릭할때 마다 페이지넘버를 active해준다. 해당하는 페이지의 카드들의 데이터를 받고 렌더링해준다.
 
  */

  return (
    <div>
      <Stack direction="row" sx={{marginBottom: '48px'}}>
        <FeedChip label="ALL" clickable active={false}></FeedChip>
        <FeedChip label="내가 작성한 피드" clickable active></FeedChip>
        <FeedChip label="좋아요" clickable active={false}></FeedChip>
      </Stack>
      <FeedCard data={TEMP_EACH_FEED} />
      <Card
        coverImage={`/images/perfume.png`}
        profileImage= {`/images/perfume.png`}
        title="안녕"
        content={TEMP_EACH_FEED.content}
        hashTags={TEMP_EACH_FEED.tag}
        onClick={() => {}}
      />
      <TestPageNumber>
        <PageNumber active={true} number={1} />
        <PageNumber active={false} number={2} />
        <PageNumber active={false} number={3} />
      </TestPageNumber>
    </div>
  )
}

export default FeedSection

const TestPageNumber = styled(Box)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 130px;
`
