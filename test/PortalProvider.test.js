import React from 'react';
import { shallow } from 'enzyme';
import { PortalProvider } from '../src';

const TestPortal = () => <div>Test Portal</div>;

const portalProvider = (portals = {}) => (
  <PortalProvider portals={portals}>
    <p>App content</p>
  </PortalProvider>
);

describe('PortalProvider', () => {
  test('Should not crash it no portals passed');

  test('Should not render portal when mounted', () => {
    const wrapper = shallow(portalProvider());
    expect(wrapper.children()).toHaveLength(1);
  });

  test('Should throw a warning if invalid portal passed', () => {
    console.errorCount = 0;
    console.error = () => console.errorCount++;

    const wrapper = shallow(portalProvider({ TEST: TestPortal }));

    wrapper.setState({ portalType: 'INVALID_TEST' });

    expect(console.errorCount).toBe(1);
  });

  test('Should render valid portal', () => {
    const wrapper = shallow(portalProvider({ TEST: TestPortal }));

    wrapper.setState({ portalType: 'TEST' });

    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.childAt(0).name()).toBe(TestPortal.name);
  });

  test('Should pass down portalProps', () => {
    const portalProps = { testProp: 1 };
    const wrapper = shallow(portalProvider({ TEST: TestPortal }));

    wrapper.setState({ portalType: 'TEST', portalProps });

    const portal = wrapper.childAt(0);
    expect(portal.props()).toHaveProperty('testProp');
    expect(portal.props().testProp).toBe(portalProps.testProp);
  });

  test('Should pass down onClose callback to valid portal', () => {
    const wrapper = shallow(portalProvider({ TEST: TestPortal }));

    wrapper.setState({ portalType: 'TEST' });

    const portal = wrapper.childAt(0);
    expect(portal.props()).toHaveProperty('onClose');
  });
});
