import {useState, useEffect, Suspense} from 'react'
import {Box, Stack, Typography, keyframes, styled} from '@mui/material'
import BranchBrandList from './branch-brand-list.'

const Kor = [
  'ㄱ',
  'ㄴ',
  'ㄷ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅅ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
  '기타',
]

const BrandList = () => {

  const [korClass, setKorClass] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box sx ={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Container>
        <Title>브랜드</Title>
        <Stack
          direction="row"
          sx={{marginBottom: '97px'}}
          justifyContent="space-between"
        >
          {Kor.map((e, i) => (
            <KorButton
              key={i}
              onClick={() => {
                setKorClass(korClass === e ? '' : e)
              }}
              active={korClass === e}
            >
              {e}
            </KorButton>
          ))}
        </Stack>
        <Suspense fallback={<Loading />}>
        <BranchBrandList korClass={korClass}/>
        </Suspense>
      </Container>
    </Box>
  )
}

export default BrandList

const Container = styled(Box)(() => ({
  width: '1200px'
}))

const Title = styled(Typography)(() => ({
  fontFamily: 'AritaBuri',
  fontSize: '36px',
  fontWeight: 600,
  marginTop: '54px',
  marginBottom: '80px',
}))

const KorButton = styled('button')<{active: boolean}>(({active, theme}) => ({
  width: '70px',
  height: '70px',
  border: `1px solid ${active ? theme.palette.primary.main : 'black'}`,
  borderRadius: '8px',
  fontFamily: 'Pretendard',
  fontSize: '24px',
}))

const blinkAnimation = keyframes`
    0%,
    100%{
        background-color: #eee
    }
    50%{
        background-color: #fff
    }
`

const Loading = styled(Box)(() => ({
  width: '1200px',
  height: '100vh',
  animation: `${blinkAnimation} 0.8s infinite linear`,
  borderRadius: '10px',
}))


