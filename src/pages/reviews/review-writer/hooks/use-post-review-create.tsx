import {useRouter} from '@hooks/use-router'
import useReviewForm from './use-review-form'
import useMutation from 'src/store/server/use-mutation'
import {
  postReviewCreate,
  postReviewImageFileUpload,
} from 'src/store/server/reviews/mutations'
import {useState} from 'react'

const usePostReviewCreate = () => {
  const [isOpen, setIsOepn] = useState(false)
  const {formValues} = useReviewForm()
  const {routeTo} = useRouter()

  const {mutate: createReview} = useMutation({
    mutationFn: postReviewCreate,
    mutationKey: ['review-write'],
    options: {
      onError: error => console.log(error, 'error'),
      onSuccess: () => setIsOepn(true),
    },
  })

  const {mutate: uploadeFiles} = useMutation({
    mutationFn: postReviewImageFileUpload,
    mutationKey: ['file-uploade'],
    options: {
      onSuccess: data => {
        const copyData = {
          ...formValues,
          ['thumbnails']: [data.id],
        }
        createReview(copyData)
      },
      onError: () => alert('이미지 업로드 실패했습니다.'),
    },
  })

  const handleClose = () => {
    setIsOepn(false)
    routeTo('/')
  }

  return {uploadeFiles, formValues, isOpen, handleClose}
}

export default usePostReviewCreate
