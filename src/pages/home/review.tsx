import FlexBox from '../../layouts/flex-box'
import {Button, Select, MenuItem, styled} from '@mui/material'
import {SectionSubTitle, SectionTitle} from './index.style'
import {useState} from 'react'
import CustomIcons from '../../assets/icons/custom-Icons'
import ReviewCard from './review-card'

interface ReviewProps {
  hasNavigation?: boolean
}

const Review = ({hasNavigation = true}: ReviewProps) => {
  const [filtered, setFiltered] = useState<string>('all')

  return (
    <div>
      {hasNavigation && (
        <>
          <SectionTitle>향수 리뷰</SectionTitle>
          <SectionSubTitle>
            다양한 향수 리뷰를 피드에서 살펴보세요
          </SectionSubTitle>
        </>
      )}

      <FlexBox
        justifyContent={hasNavigation ? 'space-between' : ''}
        alignItems="center"
      >
        {/* 메인home화면 */}
        {hasNavigation ? (
          <FlexBox style={{gap: 12, width: '100%'}}>
            <OrderButton
              clicked={filtered === 'all'}
              onClick={() => setFiltered('all')}
            >
              ALL
            </OrderButton>
            <OrderButton
              clicked={filtered === 'note'}
              onClick={() => setFiltered('note')}
            >
              향수 노트별
            </OrderButton>
            <OrderButton
              clicked={filtered === 'brand'}
              onClick={() => setFiltered('brand')}
            >
              브랜드별
            </OrderButton>
            <OrderButton
              clicked={filtered === 'mood'}
              onClick={() => setFiltered('mood')}
            >
              분위기별
            </OrderButton>
          </FlexBox>
        ) : (
          // 메인 home화면 아님
          <SectionTitle style={{width: '100%'}}>향수 리뷰</SectionTitle>
        )}

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

          {!hasNavigation && <ReviewButton>리뷰작성하기</ReviewButton>}
        </FlexBox>
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

const OrderButton = styled(Button)(({clicked}: {clicked: boolean}) => ({
  height: 42,
  borderRadius: 21,
  fontSize: 16,
  fontWeight: '600',
  color: clicked ? 'white' : '#A9A9A9',
  background: clicked ? '#FE7156' : '#F1F1F5',
  padding: '8px 13px',
}))

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
