import CarouselIcon from '../../assets/icons/carousel-Icon'
import {magazineData} from './constants'
import FlexBox from '../../layouts/flex-box'
import {MagazineCard, SectionSubTitle, SectionTitle} from './index.style'
import {
  CardImage,
  CardSpan,
  CardTitle,
  EditorProfile,
} from '../brand/brand.style'
import {HashTags} from './review-card.styles'
import styled from '@emotion/styled'
import Carousel from './carousel'
import {useState} from 'react'

const Magazines = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div>
      <SectionTitle>향수 이야기</SectionTitle>
      <SectionSubTitle>다양한 향수의 이야기를 들어보세요</SectionSubTitle>
      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        {magazineData.map((item, idx) => (
          <div key={idx}>
            <MagazineCard key={item.title}>
              <Image height="320" src={item.image} alt="magazine cover" />
              <Card>
                <EditorProfile
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    background: 'blue',
                  }}
                />
                <CardTitle>{item.title}</CardTitle>
                <CardSpan>{item.content}</CardSpan>
                <HashTags>{'#' + item.hashtag.join(' #')}</HashTags>
              </Card>
            </MagazineCard>
          </div>
        ))}
      </Carousel>
      <FlexBox
        style={{
          flexDirection: 'row',
          marginTop: 50,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {new Array(magazineData.length - 2).fill(0).map((_, idx) => (
          <button onClick={() => setCurrentIndex(idx)}>
            <CarouselIcon clicked={idx === currentIndex} />
          </button>
        ))}
      </FlexBox>
    </div>
  )
}

export default Magazines

const Image = styled(CardImage)({
  width: '100%',
  borderTopLeftRadius: 13,
  borderTopRightRadius: 13,
  objectFit: 'cover',
  marginBottom: -9,
})

const Card = styled.div({
  height: 274,
  width: '100%',
  borderBottomLeftRadius: 13,
  borderBottomRightRadius: 13,
  border: '1px solid #EDEDED',
  padding: 24,
}
