import Button from '@components/base/button'
import {useRouter} from '@hooks/use-router'
import {Typography, styled} from '@mui/material'

const Banner = () => {
  const {routeTo} = useRouter()
  return (
    <BannerWrapper>
      <BannerImage src="/images/banner.webp" alt="banner" />
      <BannerBox>
        <Title>
          REED A PERFUME에 오신것을 환영합니다.
          <br />
          향에 담긴 이야기, 당신만의 리뷰를 펼쳐보세요.
        </Title>
        <Button
          text="리뷰 작성하기"
          width="178px"
          height="54px"
          color="white"
          backgroundColor="transparent"
          fontSize="lg"
          onClick={() => routeTo('/reviews/writer')}
          style={{marginTop: '79px', zIndex: 2, border: '1px solid white'}}
        />
      </BannerBox>
    </BannerWrapper>
  )
}

export default Banner

const BannerWrapper = styled('div')({
  width: '100%',
  height: '470px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const BannerImage = styled('img')({
  width: '100%',
  height: '470px',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

const Title = styled(Typography)({
  fontSize: '36px',
  color: 'white',
  fontWeight: '600',
  zIndex: 0,
  width: '724px',
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
})

const BannerBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: 1200,
})
