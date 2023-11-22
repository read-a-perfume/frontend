import CarouselIcon from '../../assets/icons/carousel-Icon'
import {magazineData} from './constants'
import FlexBox from '../../layouts/flex-box'
import {SectionSubTitle, SectionTitle} from './index.style'
import Card from '@components/base/card.js'
import {useState} from 'react'
import Carousel from './carousel'

const Magazines = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div>
      <SectionTitle>향수 이야기</SectionTitle>
      <SectionSubTitle>다양한 향수의 이야기를 들어보세요</SectionSubTitle>
      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        {magazineData.map(data => (
          <Card
            key={data.title}
            coverImage={data.image}
            profileImage=""
            title={data.title}
            content={data.content}
            hashTags={data.hashtag}
            onClick={() => console.log('magazine card')}
          />
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
