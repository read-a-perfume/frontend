import {useQuery} from '@tanstack/react-query'
import {fetchBrands} from './queryfn'
import {useState} from 'react'
import useClassifyKorean from './hook/use-classify-korean'
import {Box, Stack, Typography, styled} from '@mui/material'
import BrandCard from './brand-card'
import Banner from '@components/base/banner'

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
  const {data: brands} = useQuery(['brands'], () => fetchBrands())

  const classifyBrands = useClassifyKorean(brands)

  const [korClass, setKorClass] = useState('')

  return (
    <>
      <Banner />
      <Container>
        <Title>브랜드</Title>
        <Stack direction="row" sx={{marginBottom: '97px'}} justifyContent="space-between">
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
        <CardContainer>
          {brands !== undefined &&
            (korClass === '' ? brands : classifyBrands[korClass]).map(e => (
              <BrandCard data={e} key={e.id} />
            ))}
        </CardContainer>
      </Container>
    </>
  )
}

export default BrandList

const Container = styled(Box)(() => ({
  padding: '0 160px 143.6px 160px',
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
  border: `2px solid ${active ? theme.palette.primary.main : 'black'}`,
  fontFamily: 'Pretendard',
  fontSize: '24px',
}))

const CardContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gap: '32.6px 24px',
  minHeight: '100vh',
  justifyItems:'center',
}))
