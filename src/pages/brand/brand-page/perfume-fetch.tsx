import {useQuery} from '@tanstack/react-query'
import {perfumeQueryKeys} from 'src/react-query-keys/perfume.keys'
import {fetchBrandPerfumes} from 'src/store/server/brand/queries'
import PerfumeList from '@components/perfumes/perfume-card-list'

interface proptype {
  brandId: string
}

const PerfumeFetch = ({brandId}: proptype) => {
  const {data: perfumeList} = useQuery(
    perfumeQueryKeys.perfumesBrand('brand', brandId, '', 1000),
    () => fetchBrandPerfumes(brandId, ''),
  )


  return (
    <>{perfumeList && <PerfumeList perfumeListData={perfumeList.content} />}</>
  )
}

export default PerfumeFetch
