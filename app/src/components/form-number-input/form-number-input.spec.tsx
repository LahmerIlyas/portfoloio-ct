import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import { FormNumberInput } from '.';

describe('<FormNumberInput />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{}} onSubmit={() => {}}>
          <FormNumberInput field="size" title="Size" />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
