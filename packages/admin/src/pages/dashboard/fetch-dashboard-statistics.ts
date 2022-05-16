import {
  FoodEntryEntity,
  UserEntity,
} from '@portfolio-calories-counter/database';
import * as moment from 'moment';

export async function fetchDashboardStatistics() {
  if (process.env.NODE_ENV === 'test') {
    return {
      usersCount: 0,
      foodEntriesCount: 0,
      currentWeek: [],
      previousWeek: [],
      averageCaloriesCount: [],
    };
  }

  const usersCount = await UserEntity.count();
  const foodEntriesCount = await FoodEntryEntity.count();

  // Average calories count per user
  const averageCaloriesCount = (await FoodEntryEntity.createQueryBuilder()
    .select(`to_char(taken_at::date, 'dd-mm-yyyy')`, 'x')
    .addSelect(`sum(calories_count)`, 'y')
    .where(`taken_at::date > now()::date - interval '7 days'`)
    .groupBy('taken_at::date')
    .orderBy(`taken_at::date`, 'ASC')
    .execute()) as Array<any>;

  const currentWeek = (await FoodEntryEntity.createQueryBuilder()
    .select(`to_char(taken_at::date, 'dd-mm-yyyy')`, 'date')
    .addSelect(`count(taken_at::date)`, 'count')
    .where(`taken_at::date > now()::date - interval '7 days'`)
    .groupBy('taken_at::date')
    .orderBy(`taken_at::date`, 'ASC')
    .execute()) as Array<any>;

  const previousWeek = await FoodEntryEntity.createQueryBuilder()
    .select(`to_char(taken_at::date, 'dd-mm-yyyy')`, 'date')
    .addSelect(`count(taken_at::date)`, 'count')
    .where(`taken_at::date > now()::date - interval '14 days'`)
    .andWhere(`taken_at::date <= now()::date - interval '7 days'`)
    .groupBy('taken_at::date')
    .orderBy(`taken_at::date`, 'ASC')
    .execute();

  // We format the data to be served
  const today = moment().add(1, 'd');
  const dates = Array(7)
    .fill(0)
    .map(() => today.subtract(1, 'd').format('DD-MM-YYYY'));

  return {
    usersCount,
    averageCaloriesCount: averageCaloriesCount.map(({ x, y }) => ({
      x,
      y: parseFloat(y) / usersCount,
    })),
    foodEntriesCount,
    currentWeek: dates
      .map((item) => ({
        x: `${item}/${moment(item, 'DD-MM-YYYY')
          .subtract(7, 'd')
          .format('DD-MM-YYYY')}`,
        y: currentWeek.find(({ date }) => date === item)?.count || 0,
      }))
      .reverse(),
    previousWeek: dates
      .map((item) => ({
        x: `${item}/${moment(item, 'DD-MM-YYYY')
          .subtract(7, 'd')
          .format('DD-MM-YYYY')}`,
        y:
          previousWeek.find(({ date }) =>
            moment(date, 'DD-MM-YYYY')
              .add(7, 'd')
              .isSame(moment(item, 'DD-MM-YYYY')),
          )?.count || 0,
      }))
      .reverse(),
  };
}
