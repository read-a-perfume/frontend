import {useState} from 'react'
import {Box, styled} from '@mui/material'
import BrandTap from './brand-tap.js'
import BrandInfo from './brand-info.js'
import {useParams} from 'react-router-dom'
import PerfumeFetch from './perfume-fetch.js'
import useGoTop from '@hooks/use-go-top.js'
import Banner from '@components/base/banner.js'
import ListArea from '@layouts/list-area.js'
import MagazineFetch from './magazine-fetch.js'

const Brand = () => {
  const [current, setCurrent] = useState<'magazine' | 'perfume'>('magazine')
  const {brandId} = useParams()

  useGoTop()

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {brandId !== undefined && (
        <>
          <Banner />
          <Container>
            <BrandInfo brandId={brandId} />
            <BrandTap current={current} setCurrent={setCurrent} />
            {current === 'magazine' ? (
              <ListArea>
                <MagazineFetch brandId={brandId} />
              </ListArea>
            ) : (
              <ListArea>
                <PerfumeFetch brandId={brandId} />
              </ListArea>
            )}
          </Container>
        </>
      )}
    </Box>
  )
}

export default Brand

const Container = styled(Box)(() => ({
  width: '1200px',
}))
