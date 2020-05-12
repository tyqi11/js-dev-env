# JavaScript Development Environment Starter Kit
JavaScript Development Environment from Pluralsight Course with Cory House

This is a starter kit for building node.js projects, with ES6 Module format, Babel as the transpiler, Webpack as the bundler, ESLint as the linter, 

## Transpilers

### Babel

Modern, standard-based JS, today

### TypeScript

Superset of JS

Enhanced autocompletion

Safer refactoring

### Elm

## Bundlers

### browserify

bundle npm packages for the web

### webpack

bundles more than just JS

import CSS, images, etc like JS

built-in hot-reloading web server

### rollup

**tree shaking**

**faster** loading production code

quite new

### JSPM

uses SystemJS, a universal module loader

can load modules at runtime

can install from npm, git

## More tools

* Development webserver: Browsersync

* Sharing work in progress: 

  * localtunnel: easy share on local machine

    * `npm install localtunnel -g`
    * start app
    * `lt --port 3000`

  * ngrok: **secure** tunnel to local machine (but more setup)

    * sign up
    * install ngrok, authtoken
    * start app
    * `./ngrok http 80`

  * now: quickly deploy Node.js to the cloud, also for **production**

    No firewall hole, hosting persists

    * `npm install -g now`
    * create start script
    * `now`

  * surge: quickly host **static** (only) files to public URL

    No firewall hole, hosting persists

    * `npm install -g surge`
    * `surge`





difficulties:

