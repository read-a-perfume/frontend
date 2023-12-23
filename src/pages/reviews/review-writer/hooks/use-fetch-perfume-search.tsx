import {useMemo} from 'react'
import {fetchPerfumeSearch} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'
interface UseReviewFormSearchProps {
  search?: string
}

const useFetchPerfumeSearch = ({search}: UseReviewFormSearchProps) => {
  const {data, isLoading} = useQuery({
    queryFn: () => fetchPerfumeSearch(search),
    queryKey: [`search/${search}-key`],
    options: {
      staleTime: 15000,
    },
  })

  const options = useMemo(() => {
    if (!isLoading) {
      return data && data.length > 0
        ? data.map(item => ({
            id: item.perfumeId,
            name: item.perfumeNameWithBrand,
          }))
        : []
    } else {
      return [{id: 0, name: ''}]
    }
  }, [data, isLoading])

  return {
    options,
    data,
    isLoading,
  }
}

export default useFetchPerfumeSearch
