/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Toptal Calories Tracker App
 * The Toptal Calories Tracker App API description
 * OpenAPI spec version: 1.0
 */
import type { FoodEntrySerializer } from './foodEntrySerializer';

export interface GetManyFoodEntriesSerializer {
  count: number;
  total: number;
  page: number;
  pageCount: number;
  data: FoodEntrySerializer;
}
