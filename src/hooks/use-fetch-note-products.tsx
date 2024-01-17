import {perfumeQueryKeys} from 'src/react-query-keys/perfume.keys'
import {fetchPerfumeList} from 'src/store/server/categories/queries'
import useQuery from 'src/store/server/use-query'

const useFetchNoteProducts = (
  keys: {queryCategoryId: number; queryPageNumber: number},
  options = {},
) => {
  const {queryCategoryId, queryPageNumber} = keys

  return useQuery({
    queryKey: perfumeQueryKeys.perfumes(queryCategoryId, queryPageNumber),
    queryFn: () => fetchPerfumeList(queryCategoryId, queryPageNumber),
    options: {
      staleTime: Infinity,
      ...options,
    },
  })
}

export default useFetchNoteProducts
