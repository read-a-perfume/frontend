import {Box, CardContent, CardHeader, styled, Modal} from '@mui/material'
import FeedbackSection from './feedback-section'
import PhotoSection from './photo-section'
import ReviewInfoSection from './review-info-section'
import HeaderSection from './header-section'
import useFetchReviewDetails from './hooks/use-fetch-review-details'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

interface IfProps {
  id: number
  handleClose: () => void
  open: boolean
}

const ReviewDetails = ({id, handleClose, open}: IfProps) => {
  const {reviewDetails, perfumeDetails} = useFetchReviewDetails({id: id})

  if (!reviewDetails) {
    return false
  }
  console.log(perfumeDetails, '향수상세')
  return (
    <Wrapper open={open} onClose={handleClose}>
      <Container sx={style}>
        <Header title={<HeaderSection perfumeDetails={perfumeDetails} />} />
        <ModalContent>
          <ModalContentWrapper>
            <PhotoSection thumbnails={reviewDetails.thumbnails} />
            <Box
              sx={{
                width: '486px',
                position: 'relative',
              }}
            >
              {reviewDetails && <ReviewInfoSection {...reviewDetails} />}
              <FeedbackSection id={id} />
            </Box>
          </ModalContentWrapper>
        </ModalContent>
      </Container>
    </Wrapper>
  )
}

export default ReviewDetails

const Wrapper = styled(Modal)({})

const Container = styled(Box)({
  width: '994px',
  height: '656px',
  padding: '16px 32px',
  boxSizing: 'border-box',
})

const Header = styled(CardHeader)({
  height: '89px',
  marginBottom: '20px',
  padding: 0,
})

const ModalContent = styled(CardContent)({
  padding: 0,
  height: '706px',
})

const ModalContentWrapper = styled(Box)({
  display: 'flex',
  gap: '24px',
  justifyContent: 'space-between',
})
