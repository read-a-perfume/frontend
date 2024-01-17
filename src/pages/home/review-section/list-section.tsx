import ReviewCardList from '@components/reviews/review-card-list'
import {reviewQueryKeys} from 'src/react-query-keys/review.keys'
import {fetchAllReviews} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'

const ListSection = ({sort}: {sort: string}) => {
  const {data} = useQuery({
    queryKey: [reviewQueryKeys.list({page: 1, size: 10, sort})],
    queryFn: () => fetchAllReviews(sort, 1, 10),
    options: {
      suspense: true,
      staleTime: 150000,
    },
  })
  const cache = data?.content.slice(0, 6)
  return (
    <>
      <ReviewCardList content={cache || []} />
    </>
  )
}
export default ListSection
