import {IfBrandListResponse} from 'types/brand.interface'
import {KorClassifyType} from './hook/use-classify-korean'
import {Box, keyframes, styled} from '@mui/material'
import {Suspense} from 'react'
import BrandCard from './brand-card'
import Nothing from './nothing'

interface proptype {
  korClass: string
  brands: IfBrandListResponse[] | undefined
  classifyBrands: KorClassifyType
}

const BranchBrandList = ({korClass, brands, classifyBrands}: proptype) => {
    
  if (korClass === '') {
    return (
      <CardContainer>
        <Suspense fallback={<Loading />}>
          {brands !== undefined &&
            (brands.length > 0 ? (
              brands.map(e => <BrandCard key={e.id} data={e} />)
            ) : (
              <Nothing />
            ))}
        </Suspense>
      </CardContainer>
    )
  }
  return (
    <CardContainer>
      <Suspense fallback={<Loading />}>
        {classifyBrands[korClass].length > 0 ? (
          classifyBrands[korClass].map(e => <BrandCard key={e.id} data={e} />)
        ) : (
          <Nothing />
        )}
      </Suspense>
    </CardContainer>
  )
}

export default BranchBrandList

const CardContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gap: '32.6px 24px',
  minHeight: '100vh',
  justifyItems: 'center',
}))

const blinkAnimation = keyframes`
    0%,
    100%{
        background-color: #ddd
    }
    50%{
        background-color: #fff
    }
`

const Loading = styled(Box)(() => ({
  width: '1200px',
  height: '100vh',
  animation: `${blinkAnimation} 0.8s infinite linear`,
}))
