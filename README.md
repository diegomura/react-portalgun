<div align="center"><img src="https://user-images.githubusercontent.com/5600341/36711997-3b679e18-1b65-11e8-98c1-f9e764f856e6.png" height="400px"></div>

[![gzip size](http://img.badgesize.io/https://unpkg.com/react-portalgun/dist/react-portalgun.umd.min.js?compression=gzip)](https://unpkg.com/react-portalgun/dist/react-portalgun.umd.min.js)
[![npm](https://img.shields.io/npm/v/react-portalgun.svg)](https://npm.im/react-portalgun)
[![Travis](https://img.shields.io/travis/diegomura/react-portalgun.svg)](https://travis-ci.org/diegomura/react-portalgun)
[![license](https://img.shields.io/npm/l/react-portalgun.svg)](./LICENSE)

## Why
Most apps need some type of modals, alerts, _whatever_ global system. Creating those entities is not hard, right? After all, everything in React is a component. However, choosing how and where to render them can be a whole different story.

Let's think about modals for example. The most easy way of showing modals would be render them straight where they are needed, and use React state API to handle whether they are open or not. Will work? Yes. Would it be recommended? Well... no. You just cannot open the same modal elsewhere without copying a bunch of logic.

Another alternative would be using a state management tool to tackle this issue, such as Redux or MobX. There are many good ways of doing this, but using them just to handle these _portals_ can turn up into adding significant boilerplate to your project.

For those scenarios `react-portalgun` is what you need!

## Installation
Add react-portalgun to your project:

```sh
npm i react-portalgun --save
#or
yarn add react-portalgun
```

## The gist
First, you'll need to globaly define what portals you want to handle:

```jsx
import { PortalProvider } from 'react-portalgun';

const PORTAL_COMPONENTS = {
  TEST_MODAL: Modal,
};

const App = () => (
  <PortalProvider portals={PORTAL_COMPONENTS}>
    // You app implementation
  </PortalProvider>
);
```

Then, anywhere in your app hierarchy tree where a portal needs to be open just use the `withPortal` HOC that will handle everything for you:

```jsx
import { withPortal } from 'react-portalgun';;

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default withPortal('TEST_MODAL', 'onClick')(Button);
```

That's it!

## Demos
Check out the [examples](https://github.com/diegomura/react-portalgun/tree/master/examples) section to grasp what you can easily achieve using react-portalgun

- [Custom modals](https://github.com/diegomura/react-portalgun/tree/master/examples/with-custom-modals)
- [Global alerts](https://github.com/diegomura/react-portalgun/tree/master/examples/with-alerts)
- [Modals using react-modal](https://github.com/diegomura/react-portalgun/tree/master/examples/using-react-modal)

## API
### `<PortalProvider />`
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

`PortalProvider` is a wrapper component that makes portals (virtually any valid React component) accessible throughout your app.

This component should be defined only once in your application, in the part of the tree where you want your modals or alerts to show up (usually near the `body` element of your document).

All valid portals are going to be referenced by a unique string key. This key is going to be used by any child component who wants to trigger that portal to show.

#### PortalProvider props
**`portals: object`** _required_

Portals definitions. Must be a valid JS object that contains each possible component you want to make accessible in your app.

Automatically, each portal will then recieve an `onClose` function that can call to close itself. For more details please refer to the examples section.

### `withModal(modalType, [actionName], [mapPropsToPortal])`

```jsx
import { withPortal } from 'react-portalgun';;

const List = ({ items, onItemClick }) => (
  <ul>
    {items.map(item => (
       <li key={item.id} onClick={() => onItemClick(item)}>
         {item.content}
       </li>
    )}
  </ul>
);

export default withPortal('TEST_MODAL', 'onItemClick')(Button);
```  

Higher order component to bind a component with a particular portal. This HOC will inject a callback function that the component can use to open the portal. This callback recieves an object as first parameter, which will be destructured and passed down as props to the portal (in the snippet above, the modal will recieve the destructured `item`).

#### withModal props
**`portalName: string`** _required_

Name of the portal yo want to bind to the component. Must match any of the portals defined on the `PortalProvider`

**`actionName: string`** _default: 'showPortal'_

Name of the prop in which the portal callback will be passed down to the wrapped component.

**`mapPropsToPortal: ({ event, ownProps }) => object`**

Used for a more fine-grained control on what and how props are passed to the portal. Returns an object with the desired props as keys.

## Inspiration
This library was mostly inspired by [this great post](https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680) by [@gaearon](https://github.com/gaearon) about how to handle modals in a React-Redux solution.

## License
MIT © [Diego Muracciole](http://github.com/diegomura)
