import React from 'react';
import renderer from 'react-test-renderer';
import { Pressable } from '.';

describe('<FormTextInput />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Pressable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
