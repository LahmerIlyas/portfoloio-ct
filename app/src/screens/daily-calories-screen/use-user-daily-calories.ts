import { DailyCalorieSerializer, useGetDailyCaloriesInfinite } from '../../api';

export function useUserDailyCalories() {
  const {
    data,
    refetch,
    isFetching,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetDailyCaloriesInfinite(
    {
      sort: ['date,DESC'],
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
        .flat() as any as DailyCalorieSerializer[]) ||
      ([] as DailyCalorieSerializer[]),
    isFetching: isFetching && !isFetchingNextPage,
    isLoadingMore: isFetchingNextPage,
    isDone: !hasNextPage,
    refetch,
    isRefetching: isRefetching && !isFetchingNextPage,
    loadMore,
  };
}
