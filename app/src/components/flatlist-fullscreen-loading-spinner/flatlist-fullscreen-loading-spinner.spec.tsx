import React from 'react';
import renderer from 'react-test-renderer';
import { FlatListFullscreenLoadingSpinner } from '.';

describe('<FlatListFullscreenLoadingSpinner />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FlatListFullscreenLoadingSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
