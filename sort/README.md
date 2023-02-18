0. Build & Run Configuration:
1. Build configuration:
   i. tsc config file creation: > tsc --init
   ii. on tsconfig.json uncomment "rootDir": "./src", "outDir": "./build"
   iii. run > tsc
   iV. > tsc -w -> recompiles the cod eeverytime we make a change in the
2. Now we need to run the JS files generated in the build:
   i. > node build/index.js on every change.
   ii. better generate the package.json file with:
   a. > npm init -y
   b. > npm i nodemon concurrently -> nodemon allows run node on every project file change. concurrently is responsible to run several scripts at the same time.
3. Go to package.json:
   i. "scripts": {
   "start:build": "tsc -w",
   "start:run": "nodemon build/index.js",
   "start": "concurrently npm:start:\*"
   },
   ii. run > npm start -> and that's it!

The "use strict" directive enables JavaScript's strict mode. JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.
