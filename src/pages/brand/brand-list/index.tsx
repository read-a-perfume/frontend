import {useQuery} from '@tanstack/react-query'
import {fetchBrands} from './queryfn'
import {useEffect, useState} from 'react'
import useClassifyKorean from './hook/use-classify-korean'
import {Stack, Typography, styled} from '@mui/material'

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
  const {data: brands} = useQuery(['brands'], () => fetchBrands())

  const [korClass, setKorClass] = useState<string>('')

  const classifyBrands = useClassifyKorean(brands)

  useEffect(() => {
    console.log(classifyBrands)
  }, [classifyBrands, brands])

  return (
    <div>
      <Title>브랜드</Title>
      <Stack direction="row" spacing={2}>
        {Kor.map((e, i) => (
          <KorButton
            key={i}
            onClick={() => {
              setKorClass(korClass === e ? '' : e)
            }}
          >
            {e}
          </KorButton>
        ))}
      </Stack>
      {brands && brands.map((e, i) => <p key={i}>{e.name}</p>)}
    </div>
  )
}

export default BrandList

const Title = styled(Typography)(() => ({
  fontFamily: 'AritaBuri',
  fontSize: '36px',
  fontWeight: 600,
}))

const KorButton = styled('button')(() => ({
  width: '75px',
  height: '75px',
  border: '2px solid black',
  fontFamily: 'Pretendard',
  fontSize: '28px',
}))
