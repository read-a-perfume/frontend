import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import {Avatar, Box, styled} from '@mui/material'
import CustomIcons from '@assets/icons/custom-Icons'
import FlexBox from '@layouts/flex-box'
import {useEffect, useState} from 'react'

interface IfDetailReviewItemProps {
  item: IfItem
}

interface IfItem {
  commentCount: number
  id: number
  keywords: string[]
  likeCount: number
  shortReview: string
  thumbnails: string[]
  user: IfUser
}

interface IfUser {
  id: number
  username: string
  thumbnail: string
}

const DetailReviewItem = ({item}: IfDetailReviewItemProps) => {
  const [hashTagKeyword, setHashTagKeyword] = useState<any>([])

  useEffect(() => {
    const updatedHashtags = item?.keywords.map(keyword => `#${keyword} `)

    setHashTagKeyword(updatedHashtags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
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
      >
        <CardHeader
          sx={{
            paddingLeft: '0px',
            '& .MuiCardHeader-avatar': {marginRight: '12px'},
          }}
          avatar={
            <Avatar
              src={item?.user?.thumbnail ? item?.user?.thumbnail : ''}
              sx={{
                bgcolor: 'gray',
                width: '24px',
                height: '24px',
              }}
              aria-label="유저이미지"
            ></Avatar>
          }
          // 유저 닉네임, 아이디
          title={
            <Typography variant="body4" sx={{fontWeight: '600', color: '#000'}}>
              {item?.user?.username}
            </Typography>
          }
        />

        <>
          {item?.thumbnails?.length === 0 && (
            <CardMedia
              component="img"
              height="138"
              image={'/images/no-image.jpg'}
              alt="Image"
              sx={{borderRadius: '12px'}}
            />
          )}
          {/* 제품 리뷰 이미지 하나일 때 */}
          {item?.thumbnails?.length === 1 && (
            <CardMedia
              component="img"
              height="138"
              image={item.thumbnails[0]}
              alt="Image"
              sx={{borderRadius: '12px'}}
            />
          )}
          {/* 제품 리뷰 이미지 두개일 때 */}
          {item?.thumbnails?.length === 2 && (
            <>
              <FlexBox justifyContent="center">
                {/* 첫 번째 이미지 */}
                <CardMedia
                  component="img"
                  height="138"
                  image={item.thumbnails[0]}
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
                  image={item.thumbnails[1]}
                  alt="Image"
                  sx={{borderRadius: '12px', width: '50%'}}
                />
              </FlexBox>
            </>
          )}

          {/* 제품 리뷰 이미지 세개 이상 일 때 */}
          {item?.thumbnails?.length >= 3 && (
            <FlexBox justifyContent="center">
              {/* 첫 번째 이미지 */}
              <CardMedia
                component="img"
                height="138"
                image={item.thumbnails[0]}
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
                  <LengthText>{`+${item.thumbnails.length - 2}`}</LengthText>
                </Box>

                <CardMedia
                  component="img"
                  height="138"
                  image={item.thumbnails[1]}
                  alt="Image"
                  sx={{borderRadius: '12px'}}
                />
              </Box>
            </FlexBox>
          )}
        </>

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 0px',
          }}
        >
          <>
            {/* 향수 설명 */}
            <Typography variant="body4" sx={{color: '#131313'}}>
              {item?.shortReview}
            </Typography>

            {/* 향수 태그 */}

            <Typography
              variant="body5"
              sx={{
                color: theme => theme.palette.primary.main,
              }}
            >
              {hashTagKeyword}
            </Typography>
          </>
        </CardContent>

        <CardActions
          disableSpacing
          sx={{
            borderTop: '1px solid #ededed',
            padding: item?.keywords.length === 0 ? '20.5px 0px' : '13.5px 0px',
          }}
        >
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
