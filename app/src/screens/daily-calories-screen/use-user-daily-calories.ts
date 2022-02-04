import { useState } from 'react';
import {
  DailyCalorieSerializer,
  useGetDailyCaloriesInfinite,
  useMe,
} from '../../api';

export function useUserDailyCalories() {
  const profile = useMe();
  const [showOnlyExceedingDays, setShowOnlyExceedingDays] = useState(false);

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
      filter: [
        `calories_count||$gte||${
          showOnlyExceedingDays ? profile.data?.data?.user_calories_limit : '0'
        }`,
      ],
    },
    {
      query: {
        queryKey: ['daily-calories', showOnlyExceedingDays],
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
    setShowOnlyExceedingDays,
    showOnlyExceedingDays,
  };
}
