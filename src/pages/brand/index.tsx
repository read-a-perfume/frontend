import {useState} from 'react'
import Banner from './banner.js'
import {Box, styled} from '@mui/material'
import BrandTap from './brand-tap.js'
import BrandInfo from './brand-info.js'
import {useParams} from 'react-router-dom'
import PerfumeList from './perfume-list.js'
import MagazineList from './magazine-list.js'
import useGoTop from '@hooks/use-go-top.js'
// import { useQuery } from '@tanstack/react-query'
// import { fetchBrand } from './queryfn.js'

const Brand = () => {
  const [current, setCurrent] = useState<'magazine' | 'perfume'>('magazine')
  const {brandId} = useParams()

  useGoTop()

  return (
    <Box sx ={{display:'flex',flexDirection:'column',alignItems:'center'}}>
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
    </Box>
  )
}

export default Brand

const Container = styled(Box)(() => ({
  iwidth: '1200px'
}))
