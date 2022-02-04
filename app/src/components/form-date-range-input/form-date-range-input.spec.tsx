import React from 'react';
import renderer from 'react-test-renderer';
import { FormDateRangeInput } from '.';

describe('<FormDateRangeInput />', () => {
  it('renders correctly', async () => {
    const tree = renderer.create(<FormDateRangeInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
