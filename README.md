# es6start

For newcomers that want to test ES6 features, it's a bit cumbersome to make a full working setup (but in the end it's actually easy). This project aims to give a pre-built start to play with the ES6 features, and even have a test suite showing the main features of the ES6.

## Features

- Fully working ES6 environment for Node.js
- Mocha/Chai.js powered test suite exemplifying ES6 features.
- Build done entirely with NPM (no Grunt, no Gulp)
- ES6 transpiling done with Babel

## How to use

After cloning the project in the project root setup the project dependencies with `npm install`.

To run the tests you can use: `npm test` or `npm run autotest`. The first form run the test one time (NPM convention), the second one run the tests everytime that something is changed.

If you want to build your ES6 files to ES5, run `npm run build` or `npm autobuild` and check the results in the `dist/` folder.

Finally to run your your applications use `./node_modules/.bin/node-babel <file.js>` on the **original** entry-point file. To run the transpiled files, use those generated with the build tasks, but **remember to import the polyfill** extension in your entry-point file with `import polyfill from "babel/polyfill";`.

## Credits / References

- [Mocha.js](http://mochajs.org/) the solid testing framework
- [Chai.js](http://chaijs.com/) the nice looking assertion Framework
- [Babel](https://babeljs.io/)the incredible ES6 to ES5 transpiler
- [es6features](https://github.com/lukehoban/es6features) the inspirational overview of ES6 features
