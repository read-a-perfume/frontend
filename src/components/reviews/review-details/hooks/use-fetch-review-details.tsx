import {perfumeQueryKeys} from 'src/react-query-keys/perfume.keys'
import {reviewQueryKeys} from 'src/react-query-keys/review.keys'
import {fetchPerfume} from 'src/store/server/perfumes/queries'
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

  const {data: perfumeDetails} = useQuery({
    queryKey: perfumeQueryKeys.perfumeDetail(Number(reviewDetails?.perfumeId)),
    queryFn: () => fetchPerfume(String(reviewDetails?.perfumeId)),
    options: {
      staleTime: 15000,
      enabled: !!reviewDetails,
    },
  })

  return {reviewDetails, perfumeDetails}
}

export default useFetchReviewDetails
