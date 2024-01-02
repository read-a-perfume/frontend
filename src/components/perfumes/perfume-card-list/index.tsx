import {styled} from '@mui/material'
import {IfPerfumeListProps} from '../type'

import PerfumesCard from '../perfume-card'

const PerfumeList = ({perfumeListData}: IfPerfumeListProps) => {
  return (
    <ProductList>
      {perfumeListData?.map((item, index: number) => (
        <div key={index}>
          <PerfumesCard data={item} />
        </div>
      ))}
    </ProductList>
  )
}
const ProductList = styled('ul')({
  padding: '0',
  margin: '0',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px ',
})

export default PerfumeList
