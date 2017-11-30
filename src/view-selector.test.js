import React from 'react';
import ViewSelector from './view-selector';
import renderer from 'react-test-renderer';

test('ViewSelector renders as expected', () => {
  const component = renderer.create(
    <ViewSelector />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
