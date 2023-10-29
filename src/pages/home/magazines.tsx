import CarouselIcon from '../../assets/icons/carousel-Icon.js'
import {magazineData} from './constants.js'
import FlexBox from '../../layouts/flex-box.js'
import {SectionSubTitle, SectionTitle} from './index.style.js'
import Card from '@components/base/card.js'

const Magazines = () => {
  // const [currentPage, setCurrentPage] = useState<number>(0)
  const currentPage = 0
  const LAST_PAGE = 3

  return (
    <div>
      <SectionTitle>향수 이야기</SectionTitle>
      <SectionSubTitle>다양한 향수의 이야기를 들어보세요</SectionSubTitle>
      {/* Magazine Card 가져오기 */}
      <FlexBox style={{gap: '32px'}}>
        {magazineData
          .slice(currentPage * LAST_PAGE, currentPage * LAST_PAGE + LAST_PAGE)
          .map(data => (
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
      </FlexBox>
      {/* 여기까지 */}
      <FlexBox
        style={{
          flexDirection: 'row',
          marginTop: 50,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <CarouselIcon clicked={true} />
        <CarouselIcon clicked={false} />
        <CarouselIcon clicked={false} />
      </FlexBox>
    </div>
  )
}

export default Magazines
