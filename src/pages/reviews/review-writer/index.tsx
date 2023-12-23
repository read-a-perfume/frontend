import styled from '@emotion/styled'
import {useResetRecoilState} from 'recoil'
import {reviewWriteFormAtom} from 'src/store/client/reviews/atoms'
import {useEffect} from 'react'
import ReviewForm from './review-form'

const ReviewWriter = () => {
  const resetReviewForm = useResetRecoilState(reviewWriteFormAtom)

  useEffect(() => {
    //리뷰 페이지 떠날 시 리뷰 전역상태값 초기화.
    return () => {
      resetReviewForm()
    }
  }, [resetReviewForm])

  return (
    <Wrapper>
      <ReviewForm />
    </Wrapper>
  )
}

export default ReviewWriter

const Wrapper = styled.div({
  width: '1024px',
  padding: '0 32px',
  margin: 'auto',
  section: {
    marginBottom: '32px',
  },
})
