import {useQuery} from '@tanstack/react-query'
import {fetchBrands} from './queryfn'
import {useState, useEffect} from 'react'
import useClassifyKorean from './hook/use-classify-korean'
import {Box, Stack, Typography, styled} from '@mui/material'
import Banner from '@components/base/banner'
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
  const {data: brands} = useQuery(['brands'], () => fetchBrands())

  const classifyBrands = useClassifyKorean(brands)

  const [korClass, setKorClass] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box sx ={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Banner />
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
        <BranchBrandList korClass={korClass} classifyBrands={classifyBrands} brands={brands}/>
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
  border: `2px solid ${active ? theme.palette.primary.main : 'black'}`,
  fontFamily: 'Pretendard',
  fontSize: '24px',
}))

