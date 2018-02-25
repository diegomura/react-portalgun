# modly
React modals made easy

## Installation
Add Modly to your project
```sh
npm i modly --save
#or
yarn add modly
```

## Demos
Check out out [examples](https://github.com/diegomura/modly/tree/master/examples) section to grasp what you can easily achieve using Modly

- [Custom modals](https://github.com/diegomura/modly/tree/master/examples/with-custom-modals)
- [Global alerts](https://github.com/diegomura/modly/tree/master/examples/with-alerts)
- [Modals using react-modal](https://github.com/diegomura/modly/tree/master/examples/using-react-modal)

## The gist

## API
### `<ModalProvider />`
`ModalProvider` is a wrapper component that makes modals or alerts (virtually any valid React component) accessible throughout your app.
This component should be defined only once in your application, in the part of the tree where you want your modals or alerts to show (usually near the `body` element of your document).

```jsx
import React from 'react';
import { ModalProvider } from 'modly';
import Modal from './Modal';

const MODAL_COMPONENTS = {
  TEST_MODAL: Modal,
};

const App = () => (
  <ModalProvider modals={MODAL_COMPONENTS}>
    // Your app implementation
  </ModalProvider>
);

export default App;
```

As you can see from this example, all valid Modly options is going to be referenced by a unique string key. This key is going to be used by any child component who wants to trigger a particular modal or action to show.

#### ModalProvider props
**`modals: object`**

### `withModal`
Higher order component

#### withModal props
**`modalName: object`** _required_

**`actionName: object`** _default to showModal_

**`mapPropsToModal: object`**

## Inspiration
This library was mostly inspired by [this great post](https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680) by @gaearon about how to handle Modals in a React-Redux solution.
