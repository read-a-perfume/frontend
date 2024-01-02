import {useQuery} from '@tanstack/react-query'
import BrandListContainer from './brand-list-container'
import Magazine from './magazine'
import { fetchBrandMagazines } from 'src/store/server/brand/queries'

interface proptype {
  brandId: string
}

const MagazineList = ({brandId}: proptype) => {
  const {data: magazineList} = useQuery(['asfaf'], () =>
    fetchBrandMagazines(brandId),
  )

  return (
    <BrandListContainer col={3}>
      {magazineList !== undefined &&
        magazineList.items.map(e => (
          <Magazine
            key={e.id}
            data={{
              thumbnail: e.coverThumbnail,
              tags: e.tags,
              content: e.content,
              title: e.title,
              coverThumbnail: e.userThumbnail,
            }}
          />
        ))}
    </BrandListContainer>
  )
}

export default MagazineList
