import ReviewSkeleton from '@components/reviews/review-card-list/review-skeleton'
import ReviewFilterTabs from '@components/reviews/review-filter-tabs'
import {Box} from '@mui/material'
import {Suspense, lazy, useState} from 'react'

const ListSection = lazy(() => import('./list-section'))
const skeletons = Array.from({length: 10}, (_, index) => index + 1)
const ReviewListPage = () => {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState<'RECENT' | 'LIKE'>('RECENT')
  const handleChangeSort = e => {
    setSort(e.target.value)
    setPage(1)
  }

  return (
    <Box sx={{marginTop: '79px'}}>
      <Box sx={{width: '1200px', margin: 'auto'}}>
        <ReviewFilterTabs
          sectionTitle="향수 리뷰"
          buttonText="리뷰 작성하기"
          optionName={['최신순', '좋아요순']}
          handleChangeSort={handleChangeSort}
        />
        <Suspense fallback={<ReviewSkeleton skeletons={skeletons} />}>
          <ListSection page={page} sort={sort} />
        </Suspense>
      </Box>
    </Box>
  )
}

export default ReviewListPage
