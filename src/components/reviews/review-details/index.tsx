import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Modal from '@mui/material/Modal'
import LinearProgress from '@mui/material/LinearProgress'
import {styled} from '@mui/material'
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

  return (
    <Wrapper open={open} onClose={handleClose}>
      <Container sx={style}>
        <>
          {reviewDetails ? (
            <>
              <ModalHeader
                title={<HeaderSection perfumeDetails={perfumeDetails} />}
              />
              <ModalContent>
                <ModalContentWrapper>
                  <PhotoSection thumbnails={reviewDetails?.thumbnails} />
                  <ReviewTextLineSection>
                    <ReviewInfoSection {...reviewDetails} />
                    <FeedbackSection id={id} />
                  </ReviewTextLineSection>
                </ModalContentWrapper>
              </ModalContent>
            </>
          ) : (
            <LinearProgress color="primary" />
          )}
        </>
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

const ModalHeader = styled(CardHeader)({
  height: '73px',
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

const ReviewTextLineSection = styled(Box)({
  width: '486px',
  position: 'relative',
})
