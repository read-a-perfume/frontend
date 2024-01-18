import styled from '@mui/material/styles/styled'
import ReviewForm from './review-form'

const ReviewWriter = () => {
  return (
    <Wrapper>
      <ReviewForm />
    </Wrapper>
  )
}

export default ReviewWriter

const Wrapper = styled("div")({
  width: '1024px',
  padding: '0 32px',
  margin: 'auto',
  section: {
    marginBottom: '32px',
  },
})
