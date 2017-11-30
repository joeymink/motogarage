import React from 'react';
import ViewSelector from './view-selector';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('ViewSelector renders as expected', () => {
  const component = renderer.create(
    <ViewSelector />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ViewSelector has 2 buttons', () => {
  const wrapper = mount((<ViewSelector />));
  expect(wrapper.find('button.view-left').length).toBe(1);
  expect(wrapper.find('button.view-right').length).toBe(1);
});

it('simulates click events', () => {
  let iWasCalled = false;
  const onButtonClick = ()=>{ iWasCalled = true };
  const wrapper = mount((<ViewSelector onViewChange={onButtonClick} />));
  wrapper.find('button.view-left').simulate('click');
  expect(iWasCalled).toBe(true);
});
