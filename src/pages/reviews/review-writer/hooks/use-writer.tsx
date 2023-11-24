import {useState} from 'react'
const tags = [
  '자연적인',
  '달달한',
  '여름',
  '상큼한',
  '과일',
  '가을',
  '우아한',
  '고급진',
]
const useWriter = () => {
  const [formValues, setFormValues] = useState<any>({
    perfumeId: '',
    dayType: '',
    strength: '',
    season: '',
    duration: 0,
    shortReview: '',
    feeling: '',
    tags: [],
    files: [],
  })

  const handleThumbnailUpload = event => {
    const target = event.target
    const file = target.files[0]
    const fileSizeLimit = 1 * 1024 * 1024
    const url = URL.createObjectURL(file)
    if (file && file.size <= fileSizeLimit) {
      setFormValues({
        ...formValues,
        ['files']: [url, ...formValues.files],
      })
      return
    } else {
      alert('4MB 이하의 이미지만 올려주세요')
    }
  }

  //리뷰 이미지 삭제

  const handleThumbnailDelete = file => {
    //삭제할 아이템 필터링
    const filteredItems = formValues.files.filter(it => it !== file && it)

    setFormValues({
      ...formValues,
      ['files']: [...filteredItems],
    })
  }

  const handleFormDataChange = (event, value) => {
    const target = event.target
    const name = target.name

    if (name === 'perfumeId') {
      setFormValues({
        ...formValues,
        ['perfumeId']: value,
      })
    }
    setFormValues({
      ...formValues,
      [name]: target.value,
    })
  }

  //최대 3개까지 가능한 체크박스
  const handleMultipleCheckBox = event => {
    const target = event.target
    const name = target.name
    //체크박스 최대 3개까지 선택가능
    if (tags.includes(event.target.name)) {
      //중복 체크는 취소하도록 필터링
      const filter = formValues.tags.filter(keyword => keyword !== name)

      if (formValues.tags.length !== filter.length) {
        setFormValues({
          ...formValues,
          ['tags']: [...filter],
        })
        return
      }
      //최대 3개까지
      if (formValues.tags.length < 3) {
        setFormValues({
          ...formValues,
          ['tags']: [name, ...formValues.tags],
        })
      }
      //3개이상이면 마지막께 취소되고 새로운 키워드가 선택
      if (formValues.tags.length >= 3) {
        const updatedtags = [...formValues.tags.slice(0, 2), name]
        setFormValues({
          ...formValues,
          ['tags']: updatedtags,
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
  }
}

export default useWriter
