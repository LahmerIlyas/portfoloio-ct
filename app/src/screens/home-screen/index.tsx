import React, { useCallback, useEffect } from 'react';
import { View, FlatList, RefreshControl, StyleSheet, Text } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenScreenNavigationProp } from '../../navigation';
import Banner from './components/banner';
import { FoodEntry } from './components/food-entry';
import { useUserFoodEntries } from './useUserFoodEntries';
import { FoodEntrySerializer } from '../../api';
import {
  FlatListFullscreenLoadingSpinner,
  FlatListLoadingMoreSpinner,
} from '../../components';

export const HomeScreen: React.FC = (props) => {
  const {
    data,
    isFetching,
    isRefetching,
    refetch,
    isLoadingMore,
    fetchNextPage,
    isDone,
  } = useUserFoodEntries();
  const navigation = useNavigation<HomeScreenScreenNavigationProp>();
  console.log('rerender');
  const goToCreateFoodEntryScreen = useCallback(() => {
    navigation.navigate('CreateFoodEntryScreen');
  }, []);

  const renderItem = useCallback((entry: FoodEntrySerializer) => {
    return <FoodEntry {...entry} />;
  }, []);

  console.log({
    isFetching,
    isRefetching,
    refetch,
    isLoadingMore,
    fetchNextPage,
  })
  return (
    <View style={styles.container}>
      <Text style={styles.helloTitle}>Hello Shambhavi,</Text>
      <Text style={styles.subtitle}>Find, track and eat heathy food.</Text>
      <Banner style={styles.banner} />
      {(isFetching || isRefetching) && <FlatListFullscreenLoadingSpinner />}
      {!(isFetching || isRefetching) && (
        <FlatList
          contentContainerStyle={{ paddingBottom: 16, paddingHorizontal: 12 }}
          removeClippedSubviews={false}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={20}
          initialNumToRender={0}
          showsVerticalScrollIndicator={false}
          data={data}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isLoadingMore && <FlatListLoadingMoreSpinner />}
          //keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
      <FloatingAction
        actions={[
          {
            text: 'Create',
            icon: <MaterialIcons name="add" color={'white'} size={24} />,
            name: 'bt_accessibility',
          },
        ]}
        overrideWithAction={true}
        onPressItem={goToCreateFoodEntryScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  helloTitle: {
    color: '#91C788',
    fontSize: 25,
    fontFamily: 'Signika-SemiBold',
    marginTop: 32,
    alignSelf: 'center',
  },
  subtitle: {
    color: '#7B7B7B',
    fontSize: 18,
    fontFamily: 'Signika-Regular',
    marginTop: 16,
    alignSelf: 'center',
  },
  banner: {
    marginVertical: 24,
    alignSelf: 'center',
  },
});
