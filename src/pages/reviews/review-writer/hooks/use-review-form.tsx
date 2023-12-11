import {useState} from 'react'
import {ReviewWriterFormProps} from '../form.interface'
const keywords = [
  '자연적인',
  '달달한',
  '여름',
  '상큼한',
  '과일',
  '가을',
  '우아한',
  '고급진',
]

interface Props {
  formData: ReviewWriterFormProps
}

const useReviewForm = ({formData}: Props) => {
  const [formValues, setFormValues] = useState<any>(formData)
  console.log(formValues.keywords)
  const handleThumbnailUpload = event => {
    const target = event.target
    const file = target.files[0]
    const fileSizeLimit = 1 * 1024 * 1024
    const url = URL.createObjectURL(file)
    if (file && file.size <= fileSizeLimit) {
      setFormValues({
        ...formValues,
        ['thumbnails']: [url, ...formValues.thumbnails],
      })
      return
    } else {
      alert('4MB 이하의 이미지만 올려주세요')
    }
  }

  //리뷰 이미지 삭제

  const handleThumbnailDelete = file => {
    //삭제할 아이템 필터링
    const filteredItems = formValues.thumbnails.filter(it => it !== file && it)

    setFormValues({
      ...formValues,
      ['thumbnails']: [...filteredItems],
    })
  }

  const handleFormDataChange = event => {
    const target = event.target
    const name = target.name
    setFormValues({
      ...formValues,
      [name]: target.value,
    })
  }

  const handleAutoComplete = (_event, value) => {
    console.log(value, 'vlaue')
    setFormValues({
      ...formValues,
      ['perfumeId']: value.id,
    })
  }

  //최대 3개까지 가능한 체크박스
  const handleMultipleCheckBox = event => {
    const target = event.target
    const name = target.name
    //체크박스 최대 3개까지 선택가능
    if (keywords.includes(event.target.name)) {
      //중복 체크는 취소하도록 필터링
      const filter = formValues.keywords.filter(
        keyword => keyword.name !== name,
      )

      if (formValues.keywords.length !== filter.length) {
        setFormValues({
          ...formValues,
          ['keywords']: [...filter],
        })
        return
      }
      //최대 3개까지
      if (formValues.keywords.length < 3) {
        setFormValues({
          ...formValues,
          ['keywords']: [name, ...formValues.keywords],
        })
      }
      //3개이상이면 마지막께 취소되고 새로운 키워드가 선택
      if (formValues.keywords.length >= 3) {
        const updatedkeywords = [...formValues.keywords.slice(0, 2), name]
        setFormValues({
          ...formValues,
          ['keywords']: updatedkeywords,
        })
        return
      }
      return
    }
  }

  return {
    formValues,
    handleThumbnailDelete,
    handleThumbnailUpload,
    handleFormDataChange,
    handleMultipleCheckBox,
    handleAutoComplete,
  }
}

export default useReviewForm
