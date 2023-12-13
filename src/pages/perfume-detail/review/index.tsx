import FlexBox from '@layouts/flex-box'
import {
  Typography,
  styled,
  Select,
  Button,
  MenuItem,
  Card,
  CardHeader,
  Avatar,
  Skeleton,
  CardContent,
  CardActions,
  Box,
} from '@mui/material'

import DetailReviewItem from './detail-review-item'

const skeletons = Array.from({length: 6}, (_, index) => index + 1)

const DetailReviewList = ({reviewData, isLoading}: any) => {
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
          <>
            {isLoading ? (
              skeletons.map((_, index) => (
                <Card
                  sx={{
                    width: '384px',
                    maxWidth: 384,
                    height: '315px',
                    padding: '0 18px',
                    borderRadius: '12px',
                    boxShadow: 'none',
                    border: '0.7px solid #ededed',
                    cursor: 'pointer',
                  }}
                  key={index}
                >
                  <CardHeader
                    sx={{
                      paddingLeft: '0px',
                      '& .MuiCardHeader-avatar': {marginRight: '12px'},
                    }}
                    avatar={
                      <Skeleton variant="circular" sx={{marginRight: '11px'}}>
                        <Avatar
                          sx={{
                            bgcolor: 'gray',
                            width: '24px',
                            height: '24px',
                          }}
                          aria-label="로딩중"
                        />
                      </Skeleton>
                    }
                    // 유저 닉네임 혹은 아이디
                    title={
                      <Skeleton width="72px" height="24px">
                        <Typography variant="body4">.</Typography>
                      </Skeleton>
                    }
                  />

                  <Skeleton
                    sx={{backgroundColor: '#E7E7E9'}}
                    variant="rounded"
                    width={348}
                    height={138}
                  />

                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '16px 0px',
                    }}
                  >
                    <Skeleton
                      variant="rounded"
                      width={215}
                      height={14}
                      sx={{
                        marginBottom: '6px',
                      }}
                    />
                    <Skeleton variant="rounded" width={176} height={14} />
                  </CardContent>

                  <CardActions
                    disableSpacing
                    sx={{
                      borderTop: '1px solid #ededed',
                      padding: '13.5px 0px',
                    }}
                  >
                    <Box sx={{display: 'flex', gap: '4px'}}>
                      <Skeleton variant="rounded" width={36} height={14} />
                      <Skeleton variant="rounded" width={36} height={14} />
                      <Skeleton variant="rounded" width={36} height={14} />
                    </Box>
                  </CardActions>
                </Card>
              ))
            ) : (
              <>
                {reviewData?.content?.map((item, index) => (
                  <DetailReviewItem item={item} key={index} />
                ))}
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
