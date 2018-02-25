# portalgun
React modals made easy
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-portalgun/dist/portalgun.umd.min.js?compression=gzip)](https://unpkg.com/react-portalgun/dist/portalgun.umd.min.js)
[![npm](https://img.shields.io/npm/v/react-portalgun.svg)](https://npm.im/react-portalgun)
[![license](https://img.shields.io/npm/l/react-portalgun.svg)](./LICENSE)

## Installation
Add portalgun to your project
```sh
npm i react-portalgun --save
#or
yarn add react-portalgun
```

## Demos
Check out out [examples](https://github.com/diegomura/portalgun/tree/master/examples) section to grasp what you can easily achieve using portalgun

- [Custom modals](https://github.com/diegomura/portalgun/tree/master/examples/with-custom-modals)
- [Global alerts](https://github.com/diegomura/portalgun/tree/master/examples/with-alerts)
- [Modals using react-modal](https://github.com/diegomura/portalgun/tree/master/examples/using-react-modal)

## The gist

## API
### `<PortalProvider />`
`PortalProvider` is a wrapper component that makes modals or alerts (virtually any valid React component) accessible throughout your app.
This component should be defined only once in your application, in the part of the tree where you want your modals or alerts to show (usually near the `body` element of your document).

```jsx
import React from 'react';
import { PortalProvider } from 'react-portalgun';
import Modal from './Modal';

const PORTAL_COMPONENTS = {
  TEST_MODAL: Modal,
};

const App = () => (
  <PortalProvider portals={PORTAL_COMPONENTS}>
    // Your app implementation
  </PortalProvider>
);

export default App;
```

As you can see from this example, all valid portalgun options is going to be referenced by a unique string key. This key is going to be used by any child component who wants to trigger a particular modal or action to show.

#### PortalProvider props
**`portals: object`**

### `withModal`
Higher order component

#### withModal props
**`portalName: object`** _required_

**`actionName: object`** _default to showModal_

**`mapPropsToPortal: object`**

## Inspiration
This library was mostly inspired by [this great post](https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680) by @gaearon about how to handle Modals in a React-Redux solution.

## License
MIT © [Diego Muracciole](http://github.com/diegomura)
