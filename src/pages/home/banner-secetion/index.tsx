import MuiButton from '@components/base/mui-button'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'
import {useRouter} from '@hooks/use-router'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'

const BannerSection = () => {
  const {routeTo} = useRouter()
  const {data} = useFetchAuthProfile()
  console.log(data, 'Data')
  const handleRoute = () => {
    if (data) {
      routeTo('/reviews/writer')
    } else {
      alert('로그인이 필요합니다.')
    }
  }

  return (
    <BannerWrapper>
      <BannerImage
        src="/images/banner.webp"
        alt="banner"
        width="1920px"
        height="470px"
      />
      <BannerBox>
        <Title fontSize={36} fontFamily="Arita buri" fontWeight={600}>
          REED A PERFUME에 오신것을 환영합니다.
          <br />
          향에 담긴 이야기, 당신만의 리뷰를 펼쳐보세요.
        </Title>
        <MuiButton
          title="리뷰 작성하기"
          type="transparent"
          width="178px"
          height="54px"
          handleClick={handleRoute}
        />
      </BannerBox>
    </BannerWrapper>
  )
}

export default BannerSection

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
