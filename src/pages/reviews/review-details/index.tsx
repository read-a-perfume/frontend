import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  styled,
} from '@mui/material'
import MainThumbnailPhoto from './main-thumbnail-photo'

const images = [
  'https://picsum.photos/500/500/?blur',
  'https://picsum.photos/500/500/?blur',
  'https://picsum.photos/500/500/?blur',
]

const ModalPerfumeInfo = ({title}: {title: string}) => {
  return (
    <>
      <Typography variant="body1">{title} 컨텐츠</Typography>
    </>
  )
}

const ReviewDetails = () => {
  return (
    <Wrapper>
      <Container>
        <ModalHeader title={<Typography variant="body1">향수이름</Typography>}>
          <ModalPerfumeInfo title="향수 이름" />
        </ModalHeader>
        <ModalContent>
          <Box
            sx={{display: 'flex', gap: '24px', justifyContent: 'space-between'}}
          >
            <Box sx={{width: '486px', border: '1px solid blue'}}>
              <MainThumbnailPhoto thumbnail={images} />
              <Box sx={{height: '111px'}}>서브 사진 이미지</Box>
            </Box>
            <Box sx={{width: '486px', border: '1px solid green'}}>
              상세 정보
            </Box>
          </Box>
        </ModalContent>
      </Container>
    </Wrapper>
  )
}

export default ReviewDetails

const Wrapper = styled(Card)({
  width: '1090px',
  height: '819px',
  padding: '24px 48px',
  boxSizing: 'border-box',
  border: '1px soild black',
})

const Container = styled(Box)({
  height: '100%',
})

const ModalHeader = styled(CardHeader)({
  height: '89px',
  border: '1px solid red',
  marginBottom: '40px',
  padding: 0,
})

const ModalContent = styled(CardContent)({
  padding: 0,
  height: '706px',
  border: '1px solid orange',
})
