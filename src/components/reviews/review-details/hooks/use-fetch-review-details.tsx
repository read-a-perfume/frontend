import {reviewQueryKeys} from 'src/react-query-keys/review.keys'
import {fetchReviewDeatils} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'

const useFetchReviewDetails = ({id}: {id: number}) => {
  const {data: reviewDetails} = useQuery({
    queryKey: reviewQueryKeys.details(id),
    queryFn: () => fetchReviewDeatils(id),
    options: {
      staleTime: 15000,
    },
  })

  return {reviewDetails}
}

export default useFetchReviewDetails
