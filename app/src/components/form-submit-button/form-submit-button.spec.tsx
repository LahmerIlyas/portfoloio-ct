import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import { FormSubmitButton } from '.';

describe('<FormSubmitButton />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{}} onSubmit={() => {}}>
          <FormSubmitButton title="Apply" />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
