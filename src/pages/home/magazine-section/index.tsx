import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'
import CarouselWithStepper from './carousel'

const MagazineSection = () => {
  return (
    <Box sx={{width: '1200px'}}>
      <SectionTitle>향수 이야기</SectionTitle>
      <SectionSubTitle>다양한 향수의 이야기를 들어보세요</SectionSubTitle>
      <CarouselWithStepper />
    </Box>
  )
}

export default MagazineSection

const SectionTitle = styled(Typography)({
  fontFamily: 'Arita buri, sans-serif, Arial !important',
  fontSize: 18,
  fontWeight: '600',
  color: '#191919',
})

const SectionSubTitle = styled(Typography)({
  fontSize: 12,
  fontWeight: '500',
  color: '#A9A9A9',
  marginTop: 5,
  marginBottom: 40,
})
