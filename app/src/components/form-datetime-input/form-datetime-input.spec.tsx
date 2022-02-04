import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import { FormDateTimeInput } from '.';

describe('<FormDateTimeInput />', () => {
  it('renders correctly', async () => {
    const tree = renderer
      .create(
        <Formik initialValues={{}} onSubmit={() => {}}>
          <FormDateTimeInput field="date" title="Date" />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
