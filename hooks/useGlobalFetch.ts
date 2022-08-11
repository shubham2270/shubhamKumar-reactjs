import useSWR from "swr";

const useGlobalFetch = (
  endPoint: string,
  fetcher: (...args: any) => any,
  ...args: any
) => {
  const { data, error, mutate, isValidating } = useSWR(
    endPoint ? endPoint : null,
    () => fetcher(...args),
    {
      revalidateOnFocus: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 401.
        if (error.status === 401) return;
      },
    }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
    isValidating,
  };
};

export default useGlobalFetch;
