# Curious Router RN

![Curious Router RN Logo](your-logo.png)

[![npm version](https://badge.fury.io/js/curious-router-rn.svg)](https://badge.fury.io/js/curious-router-rn)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Curious Router RN** is a versatile file-based routing library for React Native inspired by the simplicity and power of Next.js routing and built on top of React Navigation.<br />With just a few lines of setup, you can seamlessly integrate a robust routing system into your new or existing React Native project, making navigation a breeze.

## Features

- 🛣️ **File-based Routing**: Define routes using file and folder structures.
- 🔌 **Plug and Play**: Extremely simple setup for quick integration.
- 🚀 **High Performance**: Optimized for React Native, ensuring smooth navigation transitions.
- ⚛️ **React Native Compatible**: Designed specifically for React Native projects.
- 🎨 **Customizable**: Tailor your routing system to fit your project's needs.

## Installation

You can install Curious Router RN using npm or yarn:

```bash
npm install curious-router-rn
# or
yarn add curious-router-rn
```

## Initialize the Router

In your main application file (e.g., `App.jsx`), import and initialize Curious Router RN:

```jsx
import { CuriousRouter } from 'curious-router-rn';

const App = () => {
  return <CuriousRouter initialRoute={'home'} />;
};

export default App;
```

After that open the `metro.config.js` file and add the following lines of code in it:

```js
const config = {
  // Add these three lines
  transformer: {
    babelTransformerPath: require.resolve('curious-router-rn/dist/cjs/api'),
    cacheKey: `curious-router-rn:${new Date().getTime()}`,
  },
};
```

## Setup Routes

Create a `screens` folder in your project directory and add your route components as separate files. For example:

```bash
/screens
  /home
    page.jsx
  /profile
    page.jsx
  /settings
    page.jsx
```

That's it! You now have a file-based routing system in your React Native project.

For more advanced configuration options and customization, please refer to the Documentation.

## Documentation

For detailed usage instructions, advanced configuration options, and customization, please check out our documentation.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, feel free to open an issue. We're here to help!

Made with ❤️ by Tahir Saeed
