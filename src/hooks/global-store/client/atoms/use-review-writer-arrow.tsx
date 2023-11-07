import {useRecoilState} from 'recoil'
import reviewWriterArrowState from './review-writer-arrow.atom'

const useReviewWriterArrow = () => {
  const [pageMove, setPageMove] = useRecoilState(reviewWriterArrowState)

  //페이지 버튼을 클릭하는 함수를 만든다
  const handlePrevPage = () => {
    setPageMove(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 1))
  }

  const handleNextPage = () => {
    setPageMove(prevIndex => (prevIndex < 1 ? prevIndex + 1 : 0))
  }

  return {handleNextPage, handlePrevPage, pageMove}
}

export default useReviewWriterArrow
