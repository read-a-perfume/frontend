import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import {Avatar, Box, Skeleton, styled} from '@mui/material'
import CustomIcons from '@assets/icons/custom-Icons'
import FlexBox from '@layouts/flex-box'

// TODO: 타입설정
const DetailReviewItem = ({item, isLoading}: any) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 384,
          padding: '0 18px',
          borderRadius: '12px',
          boxShadow: 'none',
          border: '0.7px solid #ededed',
          cursor: 'pointer',
        }}
      >
        <CardHeader
          sx={{
            paddingLeft: '0px',
            '& .MuiCardHeader-avatar': {marginRight: '12px'},
          }}
          avatar={
            // 유저 이미지
            isLoading ? (
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
            ) : (
              <Avatar
                src={item?.user?.url ? item?.user?.url : ''}
                sx={{
                  bgcolor: 'gray',
                  width: '24px',
                  height: '24px',
                }}
                aria-label="유저이미지"
              ></Avatar>
            )
          }
          // 유저 닉네임 혹은 아이디
          title={
            isLoading ? (
              <Skeleton width="72px" height="24px">
                <Typography variant="body4">.</Typography>
              </Skeleton>
            ) : (
              <Typography
                variant="body4"
                sx={{fontWeight: '600', color: '#000'}}
              >
                {item?.user?.name}
              </Typography>
            )
          }
        />

        {isLoading ? (
          <Skeleton
            sx={{backgroundColor: '#E7E7E9'}}
            variant="rounded"
            width={348}
            height={138}
          />
        ) : (
          <>
            {/* 제품 리뷰 이미지 하나일 때 */}
            {item?.image?.length === 1 && (
              <CardMedia
                component="img"
                height="138"
                image={item.image[0]}
                alt="Image"
                sx={{borderRadius: '12px'}}
              />
            )}
            {/* 제품 리뷰 이미지 두개일 때 */}
            {item?.image?.length === 2 && (
              <>
                <FlexBox justifyContent="center">
                  {/* 첫 번째 이미지 */}
                  <CardMedia
                    component="img"
                    height="138"
                    image={item.image[0]}
                    alt="Image"
                    sx={{
                      borderRadius: '12px',
                      width: '50%',
                      marginRight: '12px',
                    }}
                  />

                  {/* 두 번째 이미지 */}
                  <CardMedia
                    component="img"
                    height="138"
                    image={item.image[1]}
                    alt="Image"
                    sx={{borderRadius: '12px', width: '50%'}}
                  />
                </FlexBox>
              </>
            )}

            {/* 제품 리뷰 이미지 세개 이상 일 때 */}
            {item?.image?.length >= 3 && (
              <FlexBox justifyContent="center">
                {/* 첫 번째 이미지 */}
                <CardMedia
                  component="img"
                  height="138"
                  image={item.image[0]}
                  alt="Image"
                  sx={{borderRadius: '12px', width: 229, marginRight: '12px'}}
                />

                {/* 나머지 이미지 */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '106px',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      color: '#FFF',
                    }}
                  >
                    <LengthText>{`+${item.image.length - 2}`}</LengthText>
                  </Box>

                  <CardMedia
                    component="img"
                    height="138"
                    image={item.image[1]}
                    alt="Image"
                    sx={{borderRadius: '12px'}}
                  />
                </Box>
              </FlexBox>
            )}
          </>
        )}

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 0px',
          }}
        >
          {isLoading ? (
            <>
              <Skeleton
                variant="rounded"
                width={215}
                height={14}
                sx={{
                  marginBottom: '6px',
                }}
              />
              <Skeleton variant="rounded" width={176} height={14} />
            </>
          ) : (
            <>
              {/* 향수 설명 */}
              <Typography variant="body4" sx={{color: '#131313'}}>
                이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과
                여성스러움을 감추고 있습니다.
              </Typography>
              {/* 향수 태그 */}
              <Typography
                variant="body5"
                sx={{
                  marginTop: '12px',
                  color: theme => theme.palette.primary.main,
                }}
              >
                #플로랄 #플로랄 #고급짐
              </Typography>
            </>
          )}
        </CardContent>

        <CardActions
          disableSpacing
          sx={{borderTop: '1px solid #ededed', padding: '13.5px 0px'}}
        >
          {isLoading ? (
            <Box sx={{display: 'flex', gap: '4px'}}>
              <Skeleton variant="rounded" width={36} height={14} />
              <Skeleton variant="rounded" width={36} height={14} />
              <Skeleton variant="rounded" width={36} height={14} />
            </Box>
          ) : (
            <>
              <FlexBox alignItems="center" style={{padding: '0px 4.5px'}}>
                <CustomIcons.HeartIcon />
                <FooterText>좋아요 172개</FooterText>
              </FlexBox>

              <FlexBox
                alignItems="center"
                style={{padding: '0px 4.5px', marginLeft: '16.7px'}}
              >
                <CustomIcons.CommentIcon2 />
                <FooterText>댓글 40개</FooterText>
              </FlexBox>
            </>
          )}
        </CardActions>
      </Card>
    </>
  )
}

const LengthText = styled(Typography)({
  color: '#FFF',
  fontSize: '16.5px',
  fontWeight: '400',
})

const FooterText = styled(Typography)({
  color: '#333',
  fontSize: '10.5px',
  fontWeight: '500',
  marginLeft: '4.5px',
})

export default DetailReviewItem
