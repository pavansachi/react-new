import React from 'react';
import Button from './Button';

import renderer from 'react-test-renderer';

test('----- React Component Tests: Button -----', () => {

  const component = renderer.create(
    <Button className="pretty" label="Pretty Button"></Button>,
  );

  let tree = component.toJSON();
	
  expect(tree).toMatchSnapshot();

  tree.props.onClick();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
