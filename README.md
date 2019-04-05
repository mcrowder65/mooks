## Mooks

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Total Status][total-image]][total-url]
[![PRs Welcome][pr-image]][pr-url]
[![Coverage Status][coverage-image]][coverage-url]

[npm-image]: https://badge.fury.io/js/mooks.svg
[npm-url]: https://npmjs.org/package/mooks
[travis-image]: https://travis-ci.org/mcrowder65/mooks.svg?branch=master
[travis-url]: https://travis-ci.org/mcrowder65/mooks
[total-image]: https://img.shields.io/npm/dt/mooks.svg
[total-url]: https://img.shields.io/npm/dt/mooks
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: http://makeapullrequest.com
[coverage-image]: https://coveralls.io/repos/github/mcrowder65/mooks/badge.svg
[coverage-url]: https://coveralls.io/github/mcrowder65/mooks

## Usage

```bash
yarn add -D mooks
# or
npm install -D mooks
```

## Documentation

Component documentation is available at https://mooks.dev

### Usage in tests

Under the use-local-storage-set-state module is obviously using localStorage.
When using this with jest, you will run into errors since jest does not have localStorage.
Which is why this package requires `jest-localstorage-mock` as a peerDependency.

In order to get your tests to work, run `yarn add -D jest-localstorage-mock`, and then in your jest configuration, add:

```json
"setupFiles": [
  "jest-localstorage-mock"
]
```

#### How to publish to npm

While on the master branch, run `yarn version --(major|minor|patch)`
