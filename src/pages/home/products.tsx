import {SectionSubTitle, SectionTitle} from './index.style.js'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import {Pagination, PaginationItem, Typography} from '@mui/material'
import PerfumeCharacteristics from './perfume-characteristics.js'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const products = new Array(6).fill(0).map((_, i) => i + 1)

const Products = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState<number>(0)

  const handlePage = (_, page: number) => {
    setPage(page)
  }

  return (
    <ProductsContainer>
      <SectionTitle>사람들이 많이 찾은 향수</SectionTitle>
      <SectionSubTitle>
        사람들이 많이 검색한 향수 위주로 모아봤어요
      </SectionSubTitle>
      <ProductBox>
        {products.map((_, idx) => (
          <FlexBox
            key={idx}
            direction="column"
            gap="32px"
            onClick={() => navigate('/perfume/:id')}
          >
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
      <FlexBox justifyContent="center">
        <Pagination
          page={page}
          count={Math.ceil(products.length / 6)}
          onChange={handlePage}
          variant="outlined"
          shape="rounded"
          size="large"
          hidePrevButton
          hideNextButton
          renderItem={item => <Item {...item} />}
          sx={{
            marginTop: 20,
            marginBottom: 20,
            '& .Mui-selected': {
              backgroundColor: '#D9D9D9',
            },
          }}
        />
      </FlexBox>
    </ProductsContainer>
  )
}

export default Products

const ProductsContainer = styled.div({
  marginTop: 136,
})

const ProductBox = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
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

const Item = styled(PaginationItem)({
  backgroundColor: '#F1F1F5',
  outline: 'none',
  border: 'none',
  fontSize: 16,
  fontWeight: '500',
  marginRight: 10,
})
