import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import { FormDateRangeInput } from '.';

describe('<FormDateRangeInput />', () => {
  it('renders correctly', async () => {
    const tree = renderer.create(<FormDateRangeInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
