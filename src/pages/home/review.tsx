import instance from '@api/instance'
import FlexBox from '../../layouts/flex-box'
import {SectionSubTitle, SectionTitle} from './index.style'
import ReviewCard from './review-card'
import styled from '@emotion/styled'
import {useEffect, useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import {Skeleton} from '@mui/material'
import {MoreReviewsText} from './review-card.styles'
import CustomIcons from '@assets/icons/custom-Icons'

export type Reviews = {
  id: number
  shortReview: string
  user: {
    id: number
    username: string
    thumbnail: string
  }
  thumbnails: string[]
  keywords: string[]
  likeCount: number
  commentCount: number
}

const getReviews = async () => {
  try {
    const res = await instance.get('/reviews?page=1&size=20')
    return res.data
  } catch (error) {
    console.error(`review: ${error}`)
  }
}

const Review = () => {
  const [clickedChip, setClickedChip] = useState<number>(0)
  const [reviews, setReviews] = useState<Reviews[]>()

  const {data: reviewData, isLoading} = useQuery<Reviews[]>({
    queryKey: ['reviews'],
    queryFn: () => getReviews(),
  })

  useEffect(() => {
    setReviews(reviewData?.sort((a, b) => a.id - b.id).slice(0, 6))
  }, [reviewData])

  const onChipClick = (index: number) => {
    setClickedChip(index)

    if (index === 0) {
      const defaultData = reviewData?.sort((a, b) => a.id - b.id).slice(0, 6)
      setReviews(defaultData)
    } else if (index === 1) {
      const sortedById = reviewData?.sort((a, b) => b.id - a.id).slice(0, 6)
      setReviews(sortedById)
    } else if (index === 2) {
      const sortedByLikes = reviewData
        ?.sort((a, b) => b.likeCount - a.likeCount || b.id - a.id)
        .slice(0, 6)
      setReviews(sortedByLikes)
    }
  }

  return (
    <div>
      <SectionTitle>향수 리뷰</SectionTitle>
      <SectionSubTitle>다양한 향수 리뷰를 피드에서 살펴보세요</SectionSubTitle>
      <FlexBox justifyContent="space-between">
        <FlexBox gap="8.75px">
          {['ALL', '최신 순', '좋아요 순'].map((item, index) => (
            <button onClick={() => onChipClick(index)} key={index}>
              <Chip isClicked={clickedChip === index}>{item}</Chip>
            </button>
          ))}
        </FlexBox>
        <MoreReviewsButton>
          <MoreReviewsText>향수 리뷰 전체보기</MoreReviewsText>
          <CustomIcons.AfterIcon color="#707070" size="22" />
        </MoreReviewsButton>
      </FlexBox>
      <ReviewBox>
        {reviews?.map(item => (
          <ReviewCard key={item.id} item={item} width={'344px'} />
        ))}
        {(isLoading || !reviewData) &&
          new Array(6).fill(0).map((_, idx) => {
            return (
              <Skeleton
                key={idx}
                sx={{borderRadius: 4, animationDuration: '1.2s'}}
                variant="rectangular"
                width={'384px'}
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
  rowGap: '24px',
  columnGap: '24px',
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

const MoreReviewsButton = styled.button({
  display: 'flex',
  flexDirection: 'row',
  alingItems: 'center',
  gap: '2px',
  cursor: 'pointer',
})
