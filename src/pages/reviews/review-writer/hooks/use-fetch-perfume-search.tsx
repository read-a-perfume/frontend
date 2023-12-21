import {fetchPerfumeSearch} from 'src/store/server/reviews/queries'
import useQuery from 'src/store/server/use-query'
interface UseReviewFormSearchProps {
  search?: string
}

interface Option {
  id: number
  title: string
}

const useFetchPerfumeSearch = ({search}: UseReviewFormSearchProps) => {
  const {data} = useQuery({
    queryFn: () => fetchPerfumeSearch(search),
    queryKey: [`search/${search}-key`],
    options: {
      staleTime: 15000,
    },
  })

  const options: Option[] | [] =
    data && data.length > 0
      ? data.map(item => ({
          id: item.perfumeId,
          title: item.perfumeNameWithBrand,
        }))
      : []

  return {
    options,
    data,
  }
}

export default useFetchPerfumeSearch
