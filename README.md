## Youtube api search example app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

**It implements:**
* `SearchBar` component that triggers YT api search on text changed
* `VideoList` that shows list of videos and allows to select one
* `VideoDetails` that shows selected video in iframe

**It has two versions**

* **on master branch**: Initial version in React and state kept in App component state
```
git checkout master
```
* **on dev-router branch**: With Router added to show how to change url in address bar and be able to generate link to selected video
```
git checkout dev-router
```
## Run in development mode
```node
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Minimum files set
For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.


## Tips: Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html).

For example:

### `Button.js` - example class component

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

### `DangerButton.js` - example functional component

```js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

Be aware of the [difference between default and named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

### Tips: Learn more about ES6 modules:

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## Guide 
Full version of the quide for apps created with `create-react-app` you [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).