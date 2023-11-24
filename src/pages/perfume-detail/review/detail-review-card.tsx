import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import {Avatar, styled, useTheme} from '@mui/material'
import CustomIcons from '@assets/icons/custom-Icons'
import FlexBox from '@layouts/flex-box'

const DetailReviewCard = () => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        maxWidth: 384,
        padding: '0 12px',
        borderRadius: '12px',
        boxShadow: 'none',
        border: '0.7px solid #ededed',
      }}
    >
      <CardHeader
        sx={{
          paddingLeft: '0px',
          '& .MuiCardHeader-avatar': {marginRight: '12px'},
        }}
        avatar={
          // 유저 이미지
          <Avatar
            sx={{
              bgcolor: 'red',
              width: '24px',
              height: '24px',
              fontWeight: '600',
            }}
            aria-label="유저이미지"
          >
            R
          </Avatar>
        }
        // 유저 닉네임 혹은 아이디
        title={
          <Typography variant="body4" sx={{fontWeight: '600', color: '#000'}}>
            정중식
          </Typography>
        }
      />

      {/* 향수 리뷰 이미지 */}
      <CardMedia
        component="img"
        height="194"
        image="/images/perfume-detail/review-preview01.jpg"
        alt="Paella dish"
        sx={{borderRadius: '12px'}}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 0px',
        }}
      >
        {/* 향수 설명 */}
        <Typography variant="body4" sx={{color: '#131313'}}>
          이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과
          여성스러움을 감추고 있습니다.
        </Typography>

        {/* 향수 태그 */}
        <Typography
          variant="body5"
          sx={{marginTop: '12px', color: theme.palette.primary.main}}
        >
          #플로랄 #플로랄 #고급짐
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{borderTop: '1px solid #ededed', padding: '13.5px 0px'}}
      >
        <FlexBox alignItems="center" style={{padding: '0px 4.5px'}}>
          <CustomIcons.HeartIcon />
          <Text>좋아요 172개</Text>
        </FlexBox>

        <FlexBox
          alignItems="center"
          style={{padding: '0px 4.5px', marginLeft: '16.7px'}}
        >
          <CustomIcons.CommentIcon2 />
          <Text>댓글 40개</Text>
        </FlexBox>
      </CardActions>
    </Card>
  )
}

const Text = styled(Typography)({
  color: '#333',
  fontSize: '10.5px',
  fontWeight: '500',
})

export default DetailReviewCard
