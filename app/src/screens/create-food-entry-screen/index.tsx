import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {
  FormSubmitButton,
  FormTextInput,
  FormNumberInput,
  FormDateTimeInput
} from '../../components';
import Logo from './components/logo';

export const CreateFoodEntryScreen: React.FC = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Logo style={styles.logo} />
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Fragment>
          <FormNumberInput
            field="calories"
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
          <FormDateTimeInput field="date" title="Date" />
          <FormSubmitButton
            title="Create Entry"
            style={{ marginTop: 'auto' }}
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
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 24,
  },
});
