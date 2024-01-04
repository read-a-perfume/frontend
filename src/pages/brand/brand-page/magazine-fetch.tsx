import {useQuery} from '@tanstack/react-query'
import {brandQueryKeys} from 'src/react-query-keys/brand.keys'
import {fetchBrandMagazines} from 'src/store/server/brand/queries'
import MagazineList from './magazine-list'

interface proptype {
  brandId: string
}

const MagazineFetch = ({brandId}: proptype) => {
  const {data: magazineListRes} = useQuery(
    brandQueryKeys.magazineList(brandId),
    () => fetchBrandMagazines(brandId),
  )

  return (
    <>
      {magazineListRes && <MagazineList magazineList={magazineListRes.items} />}
    </>
  )
}

export default MagazineFetch
