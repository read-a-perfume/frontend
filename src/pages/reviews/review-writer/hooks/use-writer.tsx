import {useState} from 'react'

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

  return {formValues, handleThumbnailDelete, handleThumbnailUpload}
}

export default useWriter
