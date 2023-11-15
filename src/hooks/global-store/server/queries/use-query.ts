import {
  QueryFunctionContext,
  QueryKey,
  UseQueryOptions,
  useQuery as useQueryOrigin,
} from '@tanstack/react-query'

interface UseQueryProps<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey,
  QueryFunctionContext,
> {
  queryKey: TQueryKey
  queryFn: (variables: QueryFunctionContext) => Promise<TData>
  options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
    useErrorBoundary?: boolean | ((error: TError) => boolean) | undefined
  }
}

const useQuery = <TQueryFnData, TError, TData, TQueryKey extends QueryKey>({
  queryKey,
  queryFn,
  options,
}: UseQueryProps<
  TQueryFnData,
  TError,
  TData,
  TQueryKey,
  QueryFunctionContext
>) => {
  const newOptions: any = {
    ...options,
    useErrorBoundary: options?.onError ? options.onError : !options?.onError,
  }

  return useQueryOrigin({queryKey, queryFn, ...newOptions})
}

export default useQuery
