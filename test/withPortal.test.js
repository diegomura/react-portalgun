import React from 'react';
import { shallow } from 'enzyme';
import { PortalProvider, withPortal } from '../src';

const TestPortal = () => <div>Test Portal</div>;
const Handle = props => <button {...props}>Handle</button>;

const renderHandle = args => withPortal('TEST')(Handle);

const portalProvider = children => (
  <PortalProvider portals={{ TEST: TestPortal }}>{children}</PortalProvider>
);

describe.only('withPortal', () => {
  test('Should throw error if no surrounding PortalProvider', () => {
    console.errorCount = 0;
    console.error = () => console.errorCount++;

    const Handle = renderHandle();
    const wrapper = shallow(<Handle />);

    expect(console.errorCount).toBe(1);
  });

  test('Should pass down callback using default actionName', () => {});

  test('Should pass down callback using passed actionName', () => {});

  test('Should call mapPropsToPortal if passed', () => {});

  test('Should keep other component props untouched', () => {});
});
