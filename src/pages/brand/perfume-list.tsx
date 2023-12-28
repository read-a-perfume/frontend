import {useQuery} from '@tanstack/react-query'
import BrandListContainer from './brand-list-container'
import {fetchBrandPerfumes} from './queryfn'
import {perfumeQueryKeys} from 'src/react-query-keys/perfume.keys'
import PerfumeCard from './perfume-card'

interface proptype {
  brandId: string
}

const PerfumeList = ({brandId}: proptype) => {
  const {data: perfumeList} = useQuery(
    perfumeQueryKeys.perfumesBrand('brand', brandId, '', 1000),
    () => fetchBrandPerfumes(brandId, ''),
  )

 

  return (
    <BrandListContainer col={4}>
      {perfumeList !== undefined &&
        perfumeList.content.map(e => <PerfumeCard key={e.id} data={e} />)}
    </BrandListContainer>
  )
}

export default PerfumeList
