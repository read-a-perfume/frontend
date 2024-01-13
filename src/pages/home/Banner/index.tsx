import MuiButton from '@components/base/mui-button'
import {useRouter} from '@hooks/use-router'
import {Typography, styled} from '@mui/material'

const Banner = () => {
  const {routeTo} = useRouter()
  return (
    <BannerWrapper>
      <BannerImage
        src="/images/banner.webp"
        alt="banner"
        width={1920}
        height={470}
      />
      <BannerBox>
        <Title fontSize={36} fontFamily="Arita buri" fontWeight={600}>
          REED A PERFUME에 오신것을 환영합니다.
          <br />
          향에 담긴 이야기, 당신만의 리뷰를 펼쳐보세요.
        </Title>
        <MuiButton
          title="리뷰 작성하기"
          type="white"
          width="178px"
          height="54px"
          handleClick={() => routeTo('/reviews/writer')}
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
  background:
    'linear-gradient(0deg, rgba(19, 19, 19, 0.50) 0%, rgba(19, 19, 19, 0.50) 100%), lightgray;',
})

const BannerImage = styled('img')({
  objectFit: 'cover',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

const Title = styled(Typography)({
  color: 'white',
  zIndex: 0,
  width: '724px',
  marginBottom: '79px',
})

const BannerBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: 1200,
})
