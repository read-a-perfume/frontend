import {useState} from 'react'
import Banner from './banner.js'
import {Box, styled} from '@mui/material'
import BrandTap from './brand-tap.js'
import BrandInfo from './brand-info.js'
import {useParams} from 'react-router-dom'
import PerfumeList from './perfume-list.js'
import MagazineList from './magazine-list.js'
// import { useQuery } from '@tanstack/react-query'
// import { fetchBrand } from './queryfn.js'

const Brand = () => {
  const [current, setCurrent] = useState<'magazine' | 'perfume'>('magazine')
  const {brandId} = useParams()

  return (
    <>
      {brandId !== undefined && (
        <>
          <Banner fileURL={''} />
          <Container>
            <BrandInfo brandId={brandId} />
            <BrandTap current={current} setCurrent={setCurrent} />

            {current === 'magazine' ? (
              <MagazineList brandId={brandId}/>
            ) : (
              <PerfumeList brandId={brandId} />
            )}
          </Container>
        </>
      )}
    </>
  )
}

export default Brand

const Container = styled(Box)(() => ({
  padding: '0 160px',
}))
