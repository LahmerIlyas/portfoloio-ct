import {
  MonthlySpendingSerializer,
  useGetMonthlySpendingInfinite,
} from '../../api';

export function useUserMonthlySpending() {
  const {
    data,
    refetch,
    isFetching,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetMonthlySpendingInfinite(
    {
      sort: ['month,DESC'],
    },
    {
      query: {
        getNextPageParam: (lastPage) => {
          return lastPage.data.page < lastPage.data.pageCount
            ? lastPage.data.page + 1
            : undefined;
        },
      },
    },
  );

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return {
    data:
      (data?.pages
        ?.map((page) => page?.data?.data || [])
        .flat() as any as MonthlySpendingSerializer[]) ||
      ([] as MonthlySpendingSerializer[]),
    isFetching: isFetching && !isFetchingNextPage,
    isLoadingMore: isFetchingNextPage,
    isDone: !hasNextPage,
    refetch,
    isRefetching: isRefetching && !isFetchingNextPage,
    loadMore,
  };
}
