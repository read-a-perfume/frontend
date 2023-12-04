import {
  MutationFunction,
  UseMutationOptions,
  useMutation as useMutationOrigin,
} from '@tanstack/react-query'

interface Props<TData, TError, TVariables, TContext> {
  mutationKey?: string[]
  mutationFn?: MutationFunction<TData, TVariables>
  options?: UseMutationOptions<TData, TError, TVariables, TContext> & {
    useErrorBoundary?: boolean | ((error: TError) => boolean) | undefined
  }
}

const useMutation = <
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>({
  mutationFn,
  options = {},
  mutationKey,
}: Props<TData, TError, TVariables, TContext>) => {
  const newOptions = {
    ...options,
    useErrorBoundary: options?.useErrorBoundary ?? !options?.onError,
  }

  return useMutationOrigin({mutationKey, mutationFn, ...newOptions}) // Fix this line
}

export default useMutation
