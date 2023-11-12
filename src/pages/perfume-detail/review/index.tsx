import FlexBox from '../../../layouts/flex-box'
import {Button, Select, MenuItem, styled, Typography} from '@mui/material'
import CustomIcons from '../../../assets/icons/custom-Icons'
import ReviewCard from './review-card'

const Review = () => {
  return (
    <div>
      <SectionTitle style={{width: '100%'}}>향수 리뷰</SectionTitle>

      <FlexBox justifyContent="flex-end" style={{gap: 20, width: '100%'}}>
        <DetailOrder
          defaultValue="help"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#202020',
            },
          }}
        >
          <MenuItem value="help">도움순</MenuItem>
        </DetailOrder>
        <FilterButton>
          필터 <CustomIcons.FilterIcon style={{marginLeft: 10}} />
        </FilterButton>

        <ReviewButton>리뷰작성하기</ReviewButton>
      </FlexBox>
      <FlexBox style={{marginTop: 48, flexWrap: 'wrap', gap: 23}}>
        {new Array(6).fill(0).map((_el, index) => (
          <ReviewCard key={index} />
        ))}
      </FlexBox>
    </div>
  )
}

export default Review

const ReviewButton = styled(Button)({
  borderRadius: 10,
  backgroundColor: '#FE7156',
  color: '#FFF',
  width: '200px',

  '&:hover': {
    backgroundColor: '#ee674c',
  },
})

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

const SectionTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 24,
  fontWeight: '600',
  color: '#191919',
})
