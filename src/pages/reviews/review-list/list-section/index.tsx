import ReviewCardList from '@components/reviews/review-card-list'
import {Pagination} from '@mui/material'
import {reviewQueryKeys} from 'src/react-query-keys/review.keys'
import {fetchReviewPage} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'

const ListSection = ({page, sort}: {page: number; sort: string}) => {
  const {data} = useQuery({
    queryKey: [reviewQueryKeys.list({page, size: 10, sort})],
    queryFn: () => fetchReviewPage(sort, 1, 10),
    options: {
      suspense: true,
    },
  })

  return (
    <>
      <ReviewCardList content={data?.content || []} />
      <Pagination
        count={data?.totalPages}
        variant="outlined"
        sx={{
          margin: 'auto',
          justifyContent: 'center',
          paddingTop: '100px',
          '& .MuiPagination-ul': {justifyContent: 'center'},
        }}
      />
    </>
  )
}
export default ListSection
