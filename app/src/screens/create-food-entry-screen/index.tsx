import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormSubmitButton, FormTextInput } from '../../components';
import Logo from './components/logo';

export const CreateFoodEntryScreen: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Fragment>
          <FormTextInput
            field="calories"
            title="Calories Count"
            placeholder="Number of calories"
          />
          <FormTextInput
            field="food_name"
            title="Food Name"
            placeholder="The name of the food"
          />
          <FormTextInput field="date" title="Date" placeholder="Date" />
          <FormSubmitButton
            title="Create Entry"
            style={{ marginTop: 'auto' }}
          />
        </Fragment>
      </Formik>
    </View>
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
