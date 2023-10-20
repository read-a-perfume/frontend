import { useQuery as useQueryOrigin } from "@tanstack/react-query";

const useQuery = (queryKey, queryFn, options) => {
  const newOptions = {
    ...options,
    useErrorBoundary: options?.onError ? options.onError : !options.onError,
  };

  return useQueryOrigin({ queryKey, queryFn, ...newOptions });
};
export default useQuery;
