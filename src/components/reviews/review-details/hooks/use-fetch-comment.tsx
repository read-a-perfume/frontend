import {postReviewComment} from 'src/store/server/reviews/mutations'
import {deleteReviewComment} from 'src/store/server/reviews/mutations'
import useMutation from 'src/store/server/use-mutation'
const useFetchComment = () => {
  const {mutate: createReviewCommentMutate,isLoading:isCreateLoading} = useMutation({
    mutationKey: [''],
    mutationFn: postReviewComment,
  })
  const {mutate: deleteReviewCommnetMutate} = useMutation({
    mutationKey: [''],
    mutationFn: deleteReviewComment,
  })

  return {createReviewCommentMutate, deleteReviewCommnetMutate,isCreateLoading}
}

export default useFetchComment
