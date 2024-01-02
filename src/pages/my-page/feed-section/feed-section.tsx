import {Stack} from '@mui/material'
import FeedChip from '../base/feed-chip'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'
import {ShowBenchmarkType} from './type'
import BranchoutReviews from './branch-out-reviews'
import { fetchReviewPage } from 'src/store/server/reviews/queries'

const FeedSection = () => {
  const [page, setPage] = useState<number>(1)
  const [benchmark, setBenchmark] = useState<ShowBenchmarkType>('latest')

  const handleChipClick = (ref: ShowBenchmarkType) => {
    setBenchmark(ref)
    setPage(1) // 기준이 바뀌면 초기화하기 위함
  }

  const {data: reviews} = useQuery(['reviews', {page: page}], () =>
    fetchReviewPage('',page,1000)
  )

  return (
    <div>
      <Stack direction="row" sx={{marginBottom: '48px'}}>
        <FeedChip
          label="최신 순"
          benchmark={benchmark}
          reference="latest"
          onClick={() => {
            handleChipClick('latest')
          }}
        />
        <FeedChip
          label="좋아요 순"
          benchmark={benchmark}
          reference="likes"
          onClick={() => {
            handleChipClick('likes')
          }}
        />
      </Stack>
      <BranchoutReviews reviews={reviews?.content} />
    </div>
  )
}

export default FeedSection

// branchout에서 추후 benchmark도 넣어 분기
