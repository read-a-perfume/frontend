import ReviewCardList from '@components/reviews/review-card-list'
import {reviewQueryKeys} from 'src/react-query-keys/review.keys'
import {fetchReviewPage} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'

const ListSection = ({sort}: {sort: string}) => {
  const {data} = useQuery({
    queryKey: [reviewQueryKeys.list({page: 1, size: 6, sort})],
    queryFn: () => fetchReviewPage(sort, 1, 6),
    options: {
      suspense: true,
    },
  })

  return (
    <>
      <ReviewCardList content={data?.content || []} />
    </>
  )
}
export default ListSection
