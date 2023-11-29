import FlexBox from '@layouts/flex-box'
import {Typography, styled, Select, Button, MenuItem} from '@mui/material'

import DetailReviewItem from './detail-review-item'

const DetailReviewList = ({reviewData}: any) => {
  return (
    <Container>
      <Wrapper>
        <FlexBox alignItems="center">
          <SectionTitle>향수 리뷰</SectionTitle>
          <FlexBox gap="9px">
            <SelectStyle
              defaultValue="인기상품순"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#202020',
                },
              }}
            >
              <MenuItemStyle value="인기상품순">
                <span className="option-name">인기상품순</span>
              </MenuItemStyle>
              <MenuItemStyle value="리뷰순">
                <span className="option-name">리뷰순</span>
              </MenuItemStyle>
              <MenuItemStyle value="신상품순">
                <span className="option-name">신상품순</span>
              </MenuItemStyle>
              <MenuItemStyle value="인기찜순">
                <span className="option-name">인기찜순</span>
              </MenuItemStyle>
            </SelectStyle>

            <WriteReviewButton>리뷰 작성하기</WriteReviewButton>
          </FlexBox>
        </FlexBox>

        <FlexBox gap="24px" style={{marginTop: '24px', flexWrap: 'wrap'}}>
          {reviewData.map(item => (
            <DetailReviewItem item={item} key={item.id} />
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

const MenuItemStyle = styled(MenuItem)({
  fontSize: 12,
  '&:hover .option-name': {
    fontWeight: '600',
    borderBottom: '1px solid black',
  },
})

const SelectStyle = styled(Select)({
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

  '&:hover': {
    background: '#fe7256d6 ',
  },
})

export default DetailReviewList
