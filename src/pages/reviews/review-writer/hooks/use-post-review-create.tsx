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
      onError: () => alert('이미지 업로드 실패했습니다.'),
    },
  })

  const onSubmit = async (data: any) => {
    console.log(data, 'Data')
    // event.preventDefault()
    // 선택된 값에 따른 작업 수행
    for (const item in formValues) {
      if (formValues[item] === undefined || formValues[item] === '') {
        alert(` 프로퍼티가 비어 있습니다.`)
        return
      }
    }
    const formData = new FormData()
    formData.append('file', formValues.thumbnails[0])
    uploadeFiles(formData, {
      onSuccess: data => {
        const copyData = {
          ...formValues,
          ['thumbnails']: [data.id],
        }
        createReview(copyData)
      },
    })
  }

  const handleClose = () => {
    setIsOepn(false)
    routeTo('/')
  }

  return {onSubmit, isOpen, handleClose}
}

export default usePostReviewCreate
