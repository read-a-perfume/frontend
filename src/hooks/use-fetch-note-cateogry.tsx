import {perfumeQueryKeys} from 'src/react-query-keys/perfume.keys'
import {fetchCategories} from 'src/store/server/categories/queries'
import useQuery from 'src/store/server/use-query'

const useFetchNoteCateogry = (options = {}) => {
  return useQuery({
    queryKey: perfumeQueryKeys.perfumesCategory(),
    queryFn: fetchCategories,
    options: {
      staleTime: Infinity,
      ...options,
    },
  })
}

export default useFetchNoteCateogry
