import useFetchNoteCateogry from "@hooks/use-fetch-note-cateogry"
import useFetchNoteProducts from "@hooks/use-fetch-note-products"
import { perfumeQueryKeys } from "src/react-query-keys/perfume.keys"
import { fetchPerfumeTheme } from "src/store/server/perfumes/queries"
import useQuery from "src/store/server/use-query"

const useFetchPerfume = (queryPageNumber,queryCategoryId) => {

    const {isLoading: themeDataLoading, data: perfumeThemeData} = useQuery({
        queryKey: [perfumeQueryKeys.perfumeThemes],
        queryFn: fetchPerfumeTheme,
        options: {
          staleTime: Infinity,
        },
      })
      const {
        isLoading: perfumesLoading,
        error: perfumesError,
        data: perfumeListData,
      } = useFetchNoteProducts({queryCategoryId, queryPageNumber})
      const {
        isLoading: categoryLoading,
        error: categoryError,
        data: categories,
      } = useFetchNoteCateogry()

    return {
        themeDataLoading, perfumeThemeData,perfumesLoading,perfumesError,perfumeListData,categoryLoading,categoryError,categories,
    }
}   

export default useFetchPerfume