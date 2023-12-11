import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery as useQueryOrigin,
} from '@tanstack/react-query'

interface UseQueryProps<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey,
> {
  queryKey: TQueryKey
  queryFn: QueryFunction<TQueryFnData, TQueryKey>
  options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
    onError?: any
    useErrorBoundary?: boolean | ((error: TError) => boolean) | undefined
  }
}

const useQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>({
  queryKey,
  queryFn,
  options,
}: UseQueryProps<TQueryFnData, TError, TData, TQueryKey>) => {
  const newOptions: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> = {
    ...options,
    useErrorBoundary: !options?.onError,
  }

  return useQueryOrigin({queryKey, queryFn, ...newOptions})
}

export default useQuery
