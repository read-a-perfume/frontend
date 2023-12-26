import {useState} from 'react'
import Banner from './banner.js'
import {Box, styled} from '@mui/material'
import BrandTap from './brand-tap.js'
import BrandInfo from './brand-info.js'
import {useParams} from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { fetchBrand } from './queryfn.js'

const Brand = () => {
  const [current, setCurrent] = useState<'magazine' | 'perfume'>('magazine')
  const {brandId} = useParams()

  return (
    <>
      <Banner fileURL={''} />
      <Container>
        {brandId !== undefined && <BrandInfo brandId={brandId} />}
        <BrandTap current={current} setCurrent={setCurrent} />
        <ListContainer col={current === 'magazine' ? 3 : 4}>
          {current === 'magazine' ? <>아직 api 없음</> : <></>}
        </ListContainer>
      </Container>
    </>
  )
}

export default Brand

const Container = styled(Box)(() => ({
  padding: '0 160px',
}))

const ListContainer = styled(Box)<{col: number}>(({col = 3}) => ({
  marginTop: '44px 0 178px 0',
  display: 'grid',
  gap: '44.5px 24px',
  gridTemplateColumns: `repeat(${col},1fr)`,
  justifyItems: 'center',
  minHeight: '80vh',
}))
