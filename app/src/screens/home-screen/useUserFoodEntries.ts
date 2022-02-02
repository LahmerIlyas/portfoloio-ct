import { useCallback } from 'react';
import { FoodEntrySerializer, useGetFoodEntriesInfinite } from '../../api';

export function useUserFoodEntries() {
  const {
    data,
    refetch,
    isFetching,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetFoodEntriesInfinite(
    {
      sort: ['created_at,DESC']
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
      console.log({
        isFetching,
        data: data?.pages.map((page) => page.data),
        flat:
          (data?.pages
            ?.map((page) => page?.data?.data || [])
            .flat() as any as FoodEntrySerializer[]) ||
          ([] as FoodEntrySerializer[]),
        isRefetching,
        isFetchingNextPage,
        hasNextPage,
      });
      fetchNextPage();
    }
  };

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
    loadMore,
  };
}
