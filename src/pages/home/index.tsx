import NoteSection from './note-section'
import ProductSection from './product-section'
import ReviewSection from './review-section'
import Box from '@mui/material/Box'
import {styled} from '@mui/material'
import MagazineSection from './magazine-section'
import BannerSection from './banner-secetion'

export default function Home() {
  return (
    <>
      <BannerSection />
      <Content>
        <MagazineSection />
        <NoteSection />
        <ReviewSection />
        <ProductSection />
      </Content>
    </>
  )
}

const Content = styled(Box)({
  width: '100%',
  height: '100%',
  marginTop: 100,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
