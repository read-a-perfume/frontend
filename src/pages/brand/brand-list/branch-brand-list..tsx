import useClassifyKorean from './hook/use-classify-korean'
import {Box, styled} from '@mui/material'
import BrandCard from './brand-card'
import Nothing from '../base/nothing'
import {useQuery} from '@tanstack/react-query'
import {fetchBrands} from './queryfn'

interface proptype {
  korClass: string
}

const BranchBrandList = ({korClass}: proptype) => {
  const {data: brands} = useQuery(['brands'], () => fetchBrands(), {
    suspense: true,
  })

  const classifyBrands = useClassifyKorean(brands)

  if (korClass === '') {
    return (
      <CardContainer>
        {brands !== undefined &&
          (brands.length > 0 ? (
            brands.map(e => <BrandCard key={e.id} data={e} />)
          ) : (
            <Nothing />
          ))}
      </CardContainer>
    )
  }
  return (
    <CardContainer>
      {classifyBrands[korClass].length > 0 ? (
        classifyBrands[korClass].map(e => <BrandCard key={e.id} data={e} />)
      ) : (
        <Nothing />
      )}
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
