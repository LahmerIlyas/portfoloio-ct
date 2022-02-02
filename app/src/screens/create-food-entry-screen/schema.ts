import * as Yup from 'yup';

export const CreateFoodEntryValidationSchema = () => {
  return Yup.object().shape({
    food_name: Yup.string().required(),
    taken_at: Yup.string().required(),
    calories_count: Yup.number().required().positive(),
    price: Yup.number().required().positive(),
  });
};