import ReviewCardList from '@components/reviews/review-card-list'
import {Link, Pagination, PaginationItem} from '@mui/material'
import {useLocation} from 'react-router-dom'
import {reviewQueryKeys} from 'src/react-query-keys/review.keys'
import {fetchReviewPage} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'

const ListSection = ({sort}: {sort: string}) => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const page = parseInt(query.get('page') || '1', 10)
  const {data} = useQuery({
    queryKey: [reviewQueryKeys.list({page, size: 10, sort})],
    queryFn: () => fetchReviewPage(sort, 1, 10),
    options: {
      suspense: true,
    },
  })
  console.log(query, 'query')
  return (
    <>
      <ReviewCardList content={data?.content || []} />
      <Pagination
        page={page}
        count={3}
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
