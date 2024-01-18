import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import BrandTap from './brand-tap.js'
import BrandInfo from './brand-info.js'
import {useParams} from 'react-router-dom'
import PerfumeFetch from './perfume-fetch.js'
import useGoTop from '@hooks/use-go-top.js'
import Banner from '@components/base/banner.js'
import ListArea from '@layouts/list-area.js'


const Brand = () => {
  const {brandId} = useParams()

  useGoTop()

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {brandId !== undefined && (
        <>
          <Banner />
          <Container>
            <BrandInfo brandId={brandId} />
            <BrandTap/>
            <ListArea>
              <PerfumeFetch brandId={brandId} />
            </ListArea>
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
