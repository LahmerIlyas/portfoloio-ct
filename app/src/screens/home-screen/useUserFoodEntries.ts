import { FoodEntrySerializer, useGetFoodEntriesInfinite } from '../../api';

export function useUserFoodEntries() {
  const {
    data,
    status,
    refetch,
    isFetching,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetFoodEntriesInfinite(
    {},
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

  return {
    data:
      (data?.pages
        ?.map((page) => page?.data?.data || [])
        .flat() as any as FoodEntrySerializer[]) ||
      ([] as FoodEntrySerializer[]),
    isFetching: isFetching && !isFetchingNextPage,
    isLoadingMore: isFetchingNextPage,
    isDone: !hasNextPage,
    refetch,
    isRefetching: isRefetching && !isFetchingNextPage,
    fetchNextPage: () => hasNextPage && !isFetchingNextPage && fetchNextPage(),
  };
}
