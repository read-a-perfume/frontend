/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomIcons from '@assets/icons/custom-Icons'
import FlexBox from '@layouts/flex-box'
import {Typography, styled, Select, Button, MenuItem} from '@mui/material'

import DetailReviewCard from './detail-review-card'

const DetailPageReview = () => {
  return (
    <Container>
      <Wrapper>
        <FlexBox alignItems="center">
          <SectionTitle>향수 리뷰</SectionTitle>
          <FlexBox style={{gap: 9}}>
            <DetailOrder
              defaultValue="lately"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#202020',
                },
              }}
            >
              <MenuItem value="lately">도움순</MenuItem>
              <MenuItem value="favorite">좋아요순</MenuItem>
              <MenuItem value="comment">댓글순</MenuItem>
            </DetailOrder>
            <FilterButton>
              필터 <CustomIcons.FilterIcon style={{marginLeft: 10}} />
            </FilterButton>
            <WriteReviewButton>리뷰 작성하기</WriteReviewButton>
          </FlexBox>
        </FlexBox>

        <FlexBox gap="24px" style={{marginTop: '24px', flexWrap: 'wrap'}}>
          {new Array(6).fill(0).map((_, index) => (
            <DetailReviewCard key={index + 1} />
          ))}
        </FlexBox>
      </Wrapper>
    </Container>
  )
}

const Container = styled('div')({})

const Wrapper = styled('div')({})

const SectionTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 19.5,
  fontWeight: '700',
  color: '#191919',
  marginRight: 'auto',
})

const DetailOrder = styled(Select)({
  width: 108,
  height: 42,
  textAlign: 'center',
  background: 'white',
  borderRadius: 10,
  color: '#202020',
  fontSize: 12,
  fontWeight: '500',
})

const WriteReviewButton = styled(Button)({
  color: '#FFF',
  fontSize: 12,
  padding: '9px 41.3px 8.5px 42px',
  borderRadius: 10,
  backgroundColor: '#FE7156',
})

const FilterButton = styled(Button)({
  width: 91,
  height: 42,
  borderRadius: 10,
  border: '1px solid #202020',
  background: 'white',
  fontSize: 12,
  fontWeight: '500',
  color: '#202020',
})

export default DetailPageReview
