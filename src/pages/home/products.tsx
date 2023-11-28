import {SectionSubTitle, SectionTitle} from './index.style.js'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import {Typography} from '@mui/material'
import PerfumeCharacteristics from './perfume-characteristics.js'

const Products = () => {
  return (
    <div style={{marginTop: 136}}>
      <SectionTitle>사람들이 많이 찾은 향수</SectionTitle>
      <SectionSubTitle>
        사람들이 많이 검색한 향수 위주로 모아봤어요
      </SectionSubTitle>
      <ProductBox>
        {new Array(6).fill(0).map((_, idx) => (
          <FlexBox key={idx} direction="column" gap="32px">
            <GridItem>
              <Product>
                <ProductImage src="public/images/Rectangle7217(5).png" />
                <FlexBox direction="column" alignItems="center" gap="8px">
                  <BrandName>브랜드명</BrandName>
                  <ProductName>로즈폼퐁 오 드 퍼퓸</ProductName>
                </FlexBox>
              </Product>
            </GridItem>
            <PerfumeCharacteristics />
          </FlexBox>
        ))}
      </ProductBox>
    </div>
  )
}

export default Products

const ProductBox = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  rowGap: '88px',
})

const GridItem = styled.div({
  width: '376px',
  height: '100%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Product = styled.div({
  height: 426,
  borderRadius: 16,
  border: '1px solid #EDEDED',
})

const ProductImage = styled.img({
  height: '341px',
  width: '100%',
  objectFit: 'contain',
})

const BrandName = styled(Typography)({
  fontSize: 14,
  color: '#131313',
})

const ProductName = styled(Typography)({
  fontSize: 18,
  fontWeight: '600',
  color: '#131313',
})
