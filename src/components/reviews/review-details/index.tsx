import {Box, CardContent, CardHeader, styled, Modal} from '@mui/material'
import FeedbackSection from './feedback-section'
import PhotoSection from './photo-section'
import ReviewInfoSection from './review-info-section'
import HeaderSection from './header-section'
import useFetchReviewDetails from './hooks/use-fetch-review-details'

const images = [
  'https://picsum.photos/500/500/?blur',
  'https://picsum.photos/500/500/?blur',
  'https://picsum.photos/500/500/?blur',
  'https://picsum.photos/500/500/?blur',
]

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

const ReviewDetails = ({id = 5, handleClose, open}: IfProps) => {
  const {reviewDetails} = useFetchReviewDetails({id: id})

  return (
    <Wrapper open={open} onClose={handleClose}>
      <Container sx={style}>
        <Header title={<HeaderSection perfumeId={1} />}></Header>
        <ModalContent>
          <Box
            sx={{display: 'flex', gap: '24px', justifyContent: 'space-between'}}
          >
            <PhotoSection thumbnail={images} />
            <Box
              sx={{
                width: '486px',
                position: 'relative',
              }}
            >
              {reviewDetails && <ReviewInfoSection {...reviewDetails} />}
              <FeedbackSection />
            </Box>
          </Box>
        </ModalContent>
      </Container>
    </Wrapper>
  )
}

export default ReviewDetails

const Wrapper = styled(Modal)({})

const Container = styled(Box)({
  width: '1090px',
  height: '819px',
  padding: '24px 48px',
  boxSizing: 'border-box',
})

const Header = styled(CardHeader)({
  height: '89px',
  marginBottom: '40px',
  padding: 0,
})

const ModalContent = styled(CardContent)({
  padding: 0,
  height: '706px',
})
