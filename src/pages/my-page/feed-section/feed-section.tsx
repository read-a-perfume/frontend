import {Box, Pagination, Stack, styled} from '@mui/material'
import FeedChip from '../base/feed-chip'
import {fetchReviews} from './queryfn'
import {useQuery} from '@tanstack/react-query'
import FeedCard from './feed-card/feed-card'
import {useState} from 'react'
import {ShowBenchmarkType} from './type'

const FeedSection = () => {
  const [page, setPage] = useState<number>(1)
  const [benchmark, setBenchmark] = useState<ShowBenchmarkType>('latest')

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handleChipClick = (ref: ShowBenchmarkType) => {
    setBenchmark(ref)
    setPage(1) // 기준이 바뀌면 초기화하기 위함
  }

  const {data: reviews} = useQuery(['reviews', {page: page}], () =>
    fetchReviews(page),
  )

  return (
    <div>
      <Stack direction="row" sx={{marginBottom: '48px'}}>
        <FeedChip
          label="최신순"
          benchmark={benchmark}
          reference="latest"
          onClick={() => {
            handleChipClick('latest')
          }}
        />
        <FeedChip
          label="좋아요"
          benchmark={benchmark}
          reference="likes"
          onClick={() => {
            handleChipClick('likes')
          }}
        />
      </Stack>
      <ReviewsContainer>
        {reviews && reviews.map((e, i) => <FeedCard data={e} key={i} />)}
      </ReviewsContainer>
      <TestPageNumber>
        <Pagination
          count={5}
          shape="rounded"
          size="large"
          page={page}
          onChange={handlePageChange}
        />
      </TestPageNumber>
    </div>
  )
}

export default FeedSection

const TestPageNumber = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '130px',
}))

const ReviewsContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '32px',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}))
