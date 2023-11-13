import FlexBox from '../../layouts/flex-box'
import {Button, Select, MenuItem, styled} from '@mui/material'
import {SectionSubTitle, SectionTitle} from './index.style'
import CustomIcons from '../../assets/icons/custom-Icons'
import ReviewCard from './review-card'

const Review = () => {
  return (
    <div>
      <SectionTitle>향수 리뷰</SectionTitle>
      <SectionSubTitle>다양한 향수 리뷰를 피드에서 살펴보세요</SectionSubTitle>
      <FlexBox justifyContent="flex-end">
        <FlexBox style={{gap: 20}}>
          <DetailOrder
            defaultValue="lately"
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#202020',
              },
            }}
          >
            <MenuItem value="lately">최신순</MenuItem>
            <MenuItem value="favorite">좋아요순</MenuItem>
            <MenuItem value="comment">댓글순</MenuItem>
          </DetailOrder>
          <FilterButton>
            필터 <CustomIcons.FilterIcon style={{marginLeft: 10}} />
          </FilterButton>
        </FlexBox>
      </FlexBox>
      <FlexBox style={{marginTop: 48, flexWrap: 'wrap', gap: 23}}>
        {new Array(6).fill(0).map((_, index) => (
          <ReviewCard key={index} />

        ))}
      </FlexBox>
    </div>
  )
}

export default Review

const DetailOrder = styled(Select)({
  width: 108,
  height: 42,
  background: 'white',
  borderRadius: 10,
  color: '#202020',
  fontSize: 16,
  fontWeight: '500',
})

const FilterButton = styled(Button)({
  width: 91,
  height: 42,
  borderRadius: 10,
  border: '1px solid #202020',
  background: 'white',
  fontSize: 16,
  fontWeight: '500',
  color: '#202020',
})
