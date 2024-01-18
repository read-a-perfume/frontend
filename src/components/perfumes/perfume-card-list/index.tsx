import {styled} from '@mui/material'
import {IfPerfumeListProps} from '../type'
import PerfumesCard from '../perfume-card'
import Nothing from '@components/base/nothing'

// key prop은 모든 컴포넌트에 쓸 수 있으므로 div를 굳이 만들 필요가 없습니다.
// 가능하다면, index로 key를 주기 보단 api로 응답받은 데이터의 id를 참조해서 주는 것이 적절합니다. 리스트가 변경되면 버그위험성이 있습니다.
// prop의 type은 한파일에 작성하셔도 무관하나, 이건 사람마다 맞는 것 쓰면 됩니다.

const PerfumeList = ({perfumeListData}: IfPerfumeListProps) => {
  return (
    <ProductList>
      {perfumeListData.length > 0 ? (
        perfumeListData.map(item => <PerfumesCard data={item} key={item.id} />)
      ) : (
        <Nothing />
      )}
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
