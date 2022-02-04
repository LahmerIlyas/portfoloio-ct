import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import { FormTextInput } from '.';

describe('<FormTextInput />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{}} onSubmit={() => {}}>
          <FormTextInput field="test" title="title" />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
