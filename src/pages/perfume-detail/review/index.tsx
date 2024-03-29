import {IfReviewResponse} from 'types/review.interface'

import FlexBox from '@layouts/flex-box'
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import ReviewCard from '@components/reviews/review-card'
import SkeletonCard from '@components/skeleton-card'
import ReviewFilterTabs from '@components/reviews/review-filter-tabs'

interface IfPerfumeReviewListProps {
  reviewData: IfReviewResponse
  sort: string
  isLoading: boolean
  handleChangeSort: (e) => void
}

const skeletons = Array.from({length: 6}, (_, index) => index + 1)

const PerfumeReviewList = ({
  reviewData,
  isLoading,
  sort,
  handleChangeSort,
}: IfPerfumeReviewListProps) => {
  return (
    <Container>
      <Wrapper>
        <ReviewFilterTabs
          sectionTitle="향수 리뷰"
          buttonText="리뷰 작성하기"
          optionName={['최신순', '좋아요순']}
          sort={sort}
          handleChangeSort={handleChangeSort}
        />

        <FlexBox gap="24px" style={{marginTop: '24px', flexWrap: 'wrap'}}>
          <>
            {isLoading ? (
              skeletons.map((_, index) => <SkeletonCard key={index} />)
            ) : (
              <>
                {reviewData?.content?.length > 0 ? (
                  reviewData.content.map(item => (
                    <div key={item.id}>
                      <ReviewCard {...item} />
                    </div>
                  ))
                ) : (
                  <NotReviewText>
                    아직 리뷰가 없습니다! 리뷰를 채워주세요!
                  </NotReviewText>
                )}
              </>
            )}
          </>
        </FlexBox>
      </Wrapper>
    </Container>
  )
}

const Container = styled('div')({})

const Wrapper = styled('div')({})

const NotReviewText = styled(Typography)({
  color: ' #ABABAB',
  fontAmily: 'Pretendard',
  fontSize: ' 19.5px',
  fontWeight: 500,
  lineHeight: 'normal',
})

export default PerfumeReviewList
