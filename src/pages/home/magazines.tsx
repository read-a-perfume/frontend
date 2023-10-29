import CarouselIcon from '../../assets/icons/carousel-Icon.js'
import {magazineData} from './constants.js'
import FlexBox from '../../layouts/flex-box.js'
import {MagazineCard, SectionSubTitle, SectionTitle} from './index.style.js'
import {HashTags} from './review-card.styles.js'
import styled from '@emotion/styled'

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
            <MagazineCard key={data.title}>
              <Image height="320" src={data.image} alt="magazine cover" />
              <Card>
                <EditorProfile
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    background: 'blue',
                  }}
                />
                <CardTitle>{data.title}</CardTitle>
                <CardSpan>{data.content}</CardSpan>
                <HashTags>{'#' + data.hashtag.join(' #')}</HashTags>
              </Card>
            </MagazineCard>
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
const Image = styled.img({
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
})
