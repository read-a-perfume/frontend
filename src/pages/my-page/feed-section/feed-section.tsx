import {Stack} from '@mui/material'
import FeedChip from '../base/feed-chip'
import {TEMP_EACH_FEED} from '../data/each-feed-data'
import FeedCard from './feed-card'

const FeedSection = () => {
  return (
    <div>
      <Stack direction="row" sx={{marginBottom: '48px'}}>
        <FeedChip label="ALL" clickable active={false}></FeedChip>
        <FeedChip label="내가 작성한 피드" clickable active></FeedChip>
        <FeedChip label="좋아요" clickable active={false}></FeedChip>
      </Stack>
      <FeedCard data={TEMP_EACH_FEED} />
    </div>
  )
}

export default FeedSection
