import {useCallback} from 'react'
import {useRecoilState} from 'recoil'
import {reviewWriteFormAtom} from 'src/store/client/reviews/atoms'
const keywords = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const useReviewForm = () => {
  const [formValues, setFormValues] = useRecoilState(reviewWriteFormAtom)
  console.log(formValues, 'formvalues')
  const handleThumbnailUpload = event => {
    const target = event.target
    const file = target.files[0]
    const fileSizeLimit = 1 * 1024 * 1024
    if (file && file.size <= fileSizeLimit) {
      setFormValues({
        ...formValues,
        ['thumbnails']: [file, ...formValues.thumbnails],
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

  const handleAutoComplete = (_event, value: {id: number}) => {
    if (value) {
      setFormValues({
        ...formValues,
        ['perfumeId']: value.id,
      })
    }
  }

  //최대 3개까지 가능한 체크박스
  const handleMultipleCheckBox = event => {
    const target = event.target
    const value = Number(target.value)
    if (keywords.includes(value)) {
      //중복 체크는 취소하도록 필터링
      const filter = formValues.keywords.filter(
        keywordId => keywordId !== value,
      ) //1,2,3,4,5,6

      if (formValues.keywords.length !== filter.length) {
        setFormValues({
          ...formValues,
          ['keywords']: [...filter],
        })
        return
      }

      //최대 3개까지만 출력
    }
    if (formValues.keywords.length < 3) {
      setFormValues({
        ...formValues,
        ['keywords']: [value, ...formValues.keywords],
      })
    }
    return
  }

  // const handleSlider = useCallback(
  //   (sliderValue: number) => {
  //     (sliderValue: number) => {

  //     }
  //   },
  //   [formValues, setFormValues],
  // )

  const handleSlider = useCallback(
    sliderValue => {
      if (sliderValue === 0) {
        setFormValues({
          ...formValues,
          ['strength']: 'LIGHT',
        })
        return
      }
      if (sliderValue === 50) {
        setFormValues({
          ...formValues,
          ['strength']: 'MODERATE',
        })
        return
      }
      if (sliderValue === 100) {
        setFormValues({
          ...formValues,
          ['strength']: 'HEAVY',
        })
        return
      }
    },
    [formValues, setFormValues],
  )

  return {
    formValues,
    handleThumbnailDelete,
    handleThumbnailUpload,
    handleFormDataChange,
    handleMultipleCheckBox,
    handleAutoComplete,
    handleSlider,
  }
}

export default useReviewForm
