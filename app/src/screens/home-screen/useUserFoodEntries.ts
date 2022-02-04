import { useMemo, useState } from 'react';
import { FoodEntrySerializer, useGetFoodEntriesInfinite } from '../../api';

export function useUserFoodEntries() {
  const [range, setRange] = useState<{ from?: string; to?: string }>({
    from: undefined,
    to: undefined,
  });

  const filter = useMemo<Array<string>>(() => {
    console.log({
      range
    });
    return [
      range.from ? `taken_at||$gte||${range.from}` : undefined,
      range.to ? `taken_at||$lte||${range.to}` : undefined,
    ].filter((v) => v) as Array<string>;
  }, [range]);

  const {
    data,
    refetch,
    isLoading,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetFoodEntriesInfinite(
    {
      sort: ['taken_at,DESC'],
      filter,
    },
    {
      query: {
        queryKey: ['food-entries', filter],
        getNextPageParam: (lastPage) => {
          return lastPage.data.page < lastPage.data.pageCount
            ? lastPage.data.page + 1
            : undefined;
        },
      },
    },
  );

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return {
    data:
      (data?.pages
        ?.map((page) => page?.data?.data || [])
        .flat() as any as FoodEntrySerializer[]) ||
      ([] as FoodEntrySerializer[]),
    isLoading,
    isLoadingMore: isFetchingNextPage,
    isDone: !hasNextPage,
    refetch,
    isRefetching: isRefetching && !isFetchingNextPage,
    loadMore,
    setRange,
  };
}
