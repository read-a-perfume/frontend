import {useRouter} from '@hooks/use-router'
import useMutation from 'src/store/server/use-mutation'
import {
  postReviewCreate,
  postReviewImageFileUpload,
} from 'src/store/server/reviews/mutations'
import {useState} from 'react'

const usePostReviewCreate = () => {
  const [isOpen, setIsOepn] = useState(false)

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

  const onSubmit = async (formAllData: any) => {
    console.log(formAllData, 'Data')
    // event.preventDefault()
    // 선택된 값에 따른 작업 수행

    const formData = new FormData()
    formData.append('file', formAllData.thumbnails[0])
    uploadeFiles(formData, {
      onSuccess: data => {
        const copyData = {
          ...formAllData,
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
