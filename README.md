# ang6 lib
[![Build Status](https://travis-ci.org/KarthikRajaK/ang6-lib.svg?branch=master)](https://travis-ci.org/KarthikRajaK/ang6-lib)
[![codecov](https://codecov.io/gh/KarthikRajaK/ang6-lib/branch/master/graph/badge.svg)](https://codecov.io/gh/KarthikRajaK/ang6-lib)
[![npm version](https://badge.fury.io/js/ang6-lib.svg)](http://badge.fury.io/js/ang6-lib)
[![devDependency Status](https://david-dm.org/KarthikRajaK/ang6-lib/dev-status.svg)](https://david-dm.org/KarthikRajaK/ang6-lib?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/KarthikRajaK/ang6-lib.svg)](https://github.com/KarthikRajaK/ang6-lib/issues)
[![GitHub stars](https://img.shields.io/github/stars/KarthikRajaK/ang6-lib.svg)](https://github.com/KarthikRajaK/ang6-lib/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/KarthikRajaK/ang6-lib/master/LICENSE)

## Demo
https://KarthikRajaK.github.io/ang6-lib/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ang6-lib
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { Ang6LibModule } from 'ang6-lib';

@NgModule({
  imports: [
    Ang6LibModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/KarthikRajaK/ang6-lib/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://github.com/KarthikRajaK/ang6-lib/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
