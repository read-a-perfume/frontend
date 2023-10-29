import React from 'react'
import styled from '@emotion/styled'
import {PerfumeHamburger} from '@pages/brand/brand.style.js'
import FlexBox from '@layouts/flex-box.js'
import {Typography} from '@mui/material'

interface ProductCardProps {
  isEditor?: boolean
  brandName: string
  productName: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  isEditor,
  brandName,
  productName,
}) => {
  return (
    <ProductCardContainer width="376px" height="426px">
      {isEditor && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <PerfumeHamburger />
        </div>
      )}
      <ProductCardImage src="/images/perfume.png" alt="product-image" />
      <FlexBox alignItems="center" style={{flexDirection: 'column'}}>
        <BrandName>{brandName}</BrandName>
        <ProductName>{productName}</ProductName>
      </FlexBox>
    </ProductCardContainer>
  )
}

const ProductCardContainer = styled.div(
  ({width, height}: {width: string; height: string}) => ({
    width,
    height,
    borderRadius: 16,
    border: '1px solid #EDEDED',
    backgroundColor: '#fff',
  }),
)

const ProductCardImage = styled.img({
  height: 342,
})

const BrandName = styled(Typography)({
  fontSize: 14,
  color: '#1313313',
  margin: '8px 0px',
})

const ProductName = styled(Typography)({
  fontSize: 18,
  fontWeight: '600',
  color: '#131313',
})

export default ProductCard