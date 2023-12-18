//import {useQuery} from '@tanstack/react-query'
//import {fetchBrands} from './queryfn'
import {useState} from 'react'
//import useClassifyKorean from './hook/use-classify-korean'
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
]

const BrandList = () => {
  //const {data: brands} = useQuery(['brands'], () => fetchBrands())


  //const classifyBrands = useClassifyKorean(brands)

  return (
    <>
      <Banner />
      <Container>
        <Title>브랜드</Title>
        <Stack direction="row" spacing={2} sx={{marginBottom: '97px'}}>
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
          <BrandCard
            data={{
              id: 0,
              name: '딥디크',
              story: `1961년, 파리의 생동감 넘치는 생 제르망가에서
탄생한 Diptyque는 유니크한 향수와 향기로운 바디 케어 제품 및 세련된 데코레이션 오브제를 선보입니다.`,
              thumbnail: '',
            }}
          />
        </CardContainer>
      </Container>
    </>
  )
}

export default BrandList


const Container = styled(Box)(() => ({
  padding: '0 160px',
}))


const Title = styled(Typography)(() => ({
  fontFamily: 'AritaBuri',
  fontSize: '36px',
  fontWeight: 600,
  marginTop: '54px',
  marginBottom: '80px',
}))

const KorButton = styled('button')<{active: boolean}>(({active, theme}) => ({
  width: '75px',
  height: '75px',
  border: `2px solid ${active ? theme.palette.primary.main : 'black'}`,
  fontFamily: 'Pretendard',
  fontSize: '28px',
}))

const CardContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '32.6px 24px',
}))

