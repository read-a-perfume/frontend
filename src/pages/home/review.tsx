import instance from '@api/instance'
import FlexBox from '../../layouts/flex-box'
import {SectionSubTitle, SectionTitle} from './index.style'
import ReviewCard from './review-card'
import styled from '@emotion/styled'
import {useEffect, useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import {Skeleton} from '@mui/material'

const getReviews = async () => {
  try {
    const res = await instance.get('/reviews?page=1&size=6')
    return res.data
  } catch (error) {
    console.error(`review: ${error}`)
  }
}

const Review = () => {
  const [clickedChip, setClickedChip] = useState<number>(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const {data: reviews, isLoading} = useQuery({
    queryKey: ['reviews'],
    queryFn: () => getReviews(),
    onSuccess: data => {
      console.log(data)
    },
  })

  console.log(reviews)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <SectionTitle>향수 리뷰</SectionTitle>
      <SectionSubTitle>다양한 향수 리뷰를 피드에서 살펴보세요</SectionSubTitle>
      <FlexBox justifyContent="space-between">
        <FlexBox gap="8.75px">
          {['ALL', '최신 순', '좋아요 순'].map((item, index) => (
            <button onClick={() => setClickedChip(index)} key={index}>
              <Chip isClicked={clickedChip === index}>{item}</Chip>
            </button>
          ))}
        </FlexBox>
        <button></button>
      </FlexBox>
      <ReviewBox>
        {reviews &&
          reviews.map(item => (
            <ReviewCard
              key={item.id}
              reviewId={item.id}
              width={(screenWidth - 720 - 100) / 3 + 'px'}
            />
          ))}
        {(isLoading || !reviews) &&
          new Array(6).fill(0).map((_, idx) => {
            return (
              <Skeleton
                key={idx}
                sx={{borderRadius: 4, animationDuration: '1.2s'}}
                variant="rectangular"
                width={(screenWidth - 720 - 100) / 3 + 'px'}
                height={'390px'}
              />
            )
          })}
      </ReviewBox>
    </div>
  )
}

export default Review

const ReviewBox = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  rowGap: '32px',
  columnGap: '42px',
  marginTop: 30,
  height: '890px',
})

const Chip = styled.div(({isClicked}: {isClicked: boolean}) => ({
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
  backgroundColor: isClicked ? '#FE7156' : '#F1F1F5',
  color: isClicked ? 'white' : '#A9A9A9',
}))
