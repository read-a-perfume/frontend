import ReviewCardList from '@components/reviews/review-card-list'
import {Pagination, PaginationItem} from '@mui/material'
import {Link, useLocation} from 'react-router-dom'
import {reviewQueryKeys} from 'src/react-query-keys/review.keys'
import {fetchAllReviews} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'

const ListSection = ({sort}: {sort: string}) => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const currentPage = parseInt(query.get('page') || '1', 10)

  const {data} = useQuery({
    queryKey: [reviewQueryKeys.list({page: currentPage, size: 10, sort})],
    queryFn: () => fetchAllReviews(sort, currentPage, 10),
    options: {
      staleTime: 30 * 60 * 1000,
      cacheTime: 40 * 60 * 1000,
      suspense: true,
    },
  })

  return (
    <>
      <ReviewCardList content={data?.content || []} />
      <Pagination
        page={currentPage}
        count={data?.totalPages}
        defaultPage={1}
        boundaryCount={2}
        variant="outlined"
        sx={{
          margin: 'auto',
          justifyContent: 'center',
          paddingTop: '100px',
          '& .MuiPagination-ul': {justifyContent: 'center'},
        }}
        renderItem={(item: any) => (
          <PaginationItem
            component={Link}
            to={`/reviews${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </>
  )
}
export default ListSection
