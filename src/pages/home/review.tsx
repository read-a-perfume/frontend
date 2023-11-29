import FlexBox from '../../layouts/flex-box'
import {SectionSubTitle, SectionTitle} from './index.style'
import ReviewCard from './review-card'
import styled from '@emotion/styled'
import {useState} from 'react'

const Review = () => {
  const [clickedChip, setClickedChip] = useState<number>(0)

  return (
    <div>
      <SectionTitle>향수 리뷰</SectionTitle>
      <SectionSubTitle>다양한 향수 리뷰를 피드에서 살펴보세요</SectionSubTitle>
      <FlexBox justifyContent="space-between">
        <FlexBox gap="8.75px">
          {['ALL', '최신 순', '좋아요 순'].map((item, index) => (
            <button onClick={() => setClickedChip(index)} key={index}>
              <Chip
                style={{
                  backgroundColor:
                    clickedChip === index ? '#FE7156' : '#F1F1F5',
                  color: clickedChip === index ? 'white' : '#A9A9A9',
                }}
              >
                {item}
              </Chip>
            </button>
          ))}
        </FlexBox>
        <button>더보기</button>
      </FlexBox>
      <ReviewBox>
        {new Array(6).fill(0).map((_, index) => (
          <ReviewCard key={index} />
        ))}
      </ReviewBox>
    </div>
  )
}

export default Review

const ReviewBox = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  rowGap: '32px',
  marginTop: 30,
})

const Chip = styled.div({
  border: 'none',
  fontSize: 16,
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 21,
  height: 31,
  padding: '20px 15px',
  fontFamily: 'Pretendard',
})
