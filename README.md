# es6start

For newcomers that want to test ES6 features and Node, it's a bit cumbersome to create a full working setup (transpilers, testing framework, build). This project aims to give a pre-built start to play with ES6/Node without any hassle, with the added bonus of giving a working setup of npm as build system and testing with Mocha/Chai frameworks.

## Features

- Fully working ES6 environment for Node.js
- Mocha/Chai.js powered test suite exemplifying ES6 features
- Build done entirely with NPM (no Grunt, no Gulp)
- ES6 transpiling done with Babel
- Easy to start a real project on top of it

## How to use

### Setup

Clone this project and run `npm install` at the project root.

### Tests

To run the tests you can use: `npm test` or `npm run autotest`. The first form run the test one time (NPM convention), the second one run the tests everytime that something is changed.

### Build transpiled files (optional)

If you want to build your ES6 files to ES5, run `npm run build` or `npm autobuild` and check the results in the `dist/` folder.

### Running

Finally to run your your applications there are two forms: First using `./node_modules/.bin/node-babel src/<file.js>` that will transpile the ES6 files on the fly and execute it. Secondly using `node dist/<file.js>` on the transpiled files of the `npm run build` task.

Just remember to add `import polyfill from "babel/polyfill";` on the entry-point file **only if** using the second form of execution. This will the necessary polyfill to make an ES5 environment works as an ES6 one.

## Credits / References

- [Mocha.js](http://mochajs.org/) the solid testing framework
- [Chai.js](http://chaijs.com/) the nice looking assertion Framework
- [Babel](https://babeljs.io/) the incredible ES6 to ES5 transpiler
- [es6features](https://github.com/lukehoban/es6features) the inspirational overview of ES6 features
