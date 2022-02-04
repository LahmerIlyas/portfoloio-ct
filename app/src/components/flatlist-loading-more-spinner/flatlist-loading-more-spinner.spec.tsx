import React from 'react';
import renderer from 'react-test-renderer';
import { FlatListLoadingMoreSpinner } from '.';

describe('<FlatListLoadingMoreSpinner />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FlatListLoadingMoreSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
