import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import {
  FlatListFullscreenLoadingSpinner,
  FlatListLoadingMoreSpinner,
} from '../../components';
import Banner from './components/banner';
import { Filter } from './components/filter';
import { MonthlySpendingCard } from './components/montly-spending-card';
import { useUserMonthlySpending } from './use-user-monthly-spending';

export const MonthlySpendingScreen: React.FC = () => {
  const {
    data,
    isFetching,
    isRefetching,
    refetch,
    isLoadingMore,
    loadMore,
    isDone,
    showOnlyExceedingMonths,
    setShowOnlyExceedingMonths,
  } = useUserMonthlySpending();
  const renderItem = useCallback(({ item }) => {
    return <MonthlySpendingCard {...item} />;
  }, []);

  return (
    <View style={styles.container}>
      <Banner style={{ alignSelf: 'center' }} />
      <Text style={styles.title}>Monthly spending</Text>
      <Filter
        showOnlyExceedingMonths={showOnlyExceedingMonths}
        setShowOnlyExceedingMonths={setShowOnlyExceedingMonths}
      />
      {(isFetching || isRefetching) && <FlatListFullscreenLoadingSpinner />}
      {!(isFetching || isRefetching) && (
        <FlatList
          contentContainerStyle={{ paddingBottom: 16 }}
          removeClippedSubviews={false}
          initialNumToRender={0}
          showsVerticalScrollIndicator={false}
          data={data}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
          onEndReached={loadMore}
          onEndReachedThreshold={1}
          ListFooterComponent={isLoadingMore && <FlatListLoadingMoreSpinner />}
          //keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64,
  },
  title: {
    fontSize: 22,
    marginTop: 32,
    paddingHorizontal: 32,
    fontFamily: 'Signika-Regular',
  },
});
