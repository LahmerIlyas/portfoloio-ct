import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {
  FormSubmitButton,
  FormTextInput,
  FormNumberInput,
  FormDateTimeInput,
} from '../../components';
import Logo from './components/logo';
import { CreateFoodEntryValidationSchema } from './schema';
import { useCreateFoodEntry } from './use-create-food-entry';

export const CreateFoodEntryScreen: React.FC = (props) => {
  const { createFoodEntry } = useCreateFoodEntry();

  return (
    <ScrollView style={styles.container}>
      <Logo style={styles.logo} />
      <Formik
        initialValues={{
          calories_count: undefined,
          food_name: undefined,
          price: undefined,
          taken_at: undefined,
          user_id: undefined,
        }}
        onSubmit={createFoodEntry}
        validationSchema={CreateFoodEntryValidationSchema}
        validateOnMount={false}
      >
        <Fragment>
          <FormNumberInput
            field="calories_count"
            title="Calories Count"
            placeholder="Number of calories"
          />
          <FormTextInput
            field="food_name"
            title="Food Name"
            placeholder="The name of the food"
          />
          <FormNumberInput
            field="price"
            title="Price"
            placeholder="The price of the food"
          />
          <FormDateTimeInput field="taken_at" title="Date" />
          <FormSubmitButton
            title="Create Entry"
            style={{ marginVertical: 32 }}
          />
        </Fragment>
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 32,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 24,
  },
});
