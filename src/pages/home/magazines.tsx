import CarouselWithStepper from './carousel'
import {SectionSubTitle, SectionTitle} from './index.style'

const Magazines = () => {
  return (
    <div style={{width: 1072}}>
      <SectionTitle>향수 이야기</SectionTitle>
      <SectionSubTitle>다양한 향수의 이야기를 들어보세요</SectionSubTitle>
      <CarouselWithStepper />
    </div>
  )
}

export default Magazines
