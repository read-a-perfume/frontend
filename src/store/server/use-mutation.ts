import {
  useMutation as useMutationOrigin,
  UseMutationOptions,
} from '@tanstack/react-query'

interface UseMutationProps<TData, TError, TVariables, TContext> {
  mutationKey: string[]
  mutationFn: (variables: TVariables) => Promise<TData>
  options?: UseMutationOptions<TData, TError, TVariables, TContext> & {
    useErrorBoundary?: boolean | ((error: TError) => boolean) | undefined
  }
}

const useMutation = <TData, TError, TVariables, TContext>({
  mutationFn,
  options,
  mutationKey,
}: UseMutationProps<TData, TError, TVariables, TContext>) => {
  const newOptions: UseMutationOptions<TData, TError, TVariables, TContext> = {
    ...options,
    useErrorBoundary: options?.useErrorBoundary ?? !options?.onError,
  }

  return useMutationOrigin({mutationKey, mutationFn, ...newOptions}) // Fix this line
}

export default useMutation
