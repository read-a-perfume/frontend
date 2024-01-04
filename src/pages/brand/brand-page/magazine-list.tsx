import Magazine from './magazine'
import {Box, styled} from '@mui/material'
import {IfMagazineResponse} from 'types/brand.interface'

interface proptype {
  magazineList: IfMagazineResponse[]
}

const MagazineList = ({magazineList}: proptype) => {
  return (
    <BrandListContainer col={3}>
      {magazineList.map(e => (
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

const BrandListContainer = styled(Box)<{col: number}>(({col}) => ({
  display: 'grid',
  gap: '60px 32px',
  gridTemplateColumns: `repeat(${col},1fr)`,
  justifyItems: 'center',
  minHeight: '90vh',
  paddingTop: '44px',
}))
