import {useState} from 'react'

interface UseReviewFormPreNext {
  index: number
}

const useReviewFormPreNext = ({index}: UseReviewFormPreNext) => {
  const [prograss, setPrograss] = useState(index)

  const handleNextPage = () => {
    setPrograss(pre => (pre < 2 ? pre + 1 : pre))
  }
  const handlePrevPage = () => {
    setPrograss(pre => (pre > 0 ? pre - 1 : pre))
  }
  return {handleNextPage, handlePrevPage, prograss}
}

export default useReviewFormPreNext
