import {useQueryClient} from '@tanstack/react-query'
import {reviewMuationKeys} from 'src/react-query-keys/review.keys'
import {postReviewComment} from 'src/store/server/reviews/mutations'
import {deleteReviewComment} from 'src/store/server/reviews/mutations'
import {fetchReviewComments} from 'src/store/server/reviews/queries'
import useMutation from 'src/store/server/use-mutation'
import useQuery from 'src/store/server/use-query'

const useFetchComment = ({id}: {id: number}) => {
  const queryClient = useQueryClient()
  const {mutate: createCommentMutate} = useMutation({
    mutationKey: reviewMuationKeys.commenntAdd,
    mutationFn: postReviewComment,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries([`comments-${id}`])
      },
    },
  })
  const {mutate: deleteCommnetMutate} = useMutation({
    mutationKey: reviewMuationKeys.commenntRemove,
    mutationFn: deleteReviewComment,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries([`comments-${id}`])
      },
    },
  })

  const {data: commentData} = useQuery({
    queryKey: [`comments-${id}`],
    queryFn: () => fetchReviewComments(id),
    options: {
      staleTime: 15000,
    },
  })

  return {createCommentMutate, deleteCommnetMutate, commentData}
}

export default useFetchComment
