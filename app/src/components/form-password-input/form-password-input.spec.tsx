import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import { FormPasswordInput } from '.';

describe('<FormPasswordInput />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{}} onSubmit={() => {}}>
          <FormPasswordInput field="password" title="Password" />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
