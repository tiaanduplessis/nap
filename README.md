
<div align="center">
  <img width="50%" src="https://www.askideas.com/media/36/You-Will-Go-To-Sleep-Or-I-Will-Put-To-Sleep-Funny-Meme-Image.jpg" alt=""/>
</div>
<h1 align="center">nap</h1>
<div align="center">
  <strong>Unfancy promise based sleep function</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/@tiaanduplessis/nap">
    <img src="https://img.shields.io/npm/v/@tiaanduplessis/nap.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://codecov.io/gh/tiaanduplessis/nap">
  <img src="https://codecov.io/gh/tiaanduplessis/nap/branch/master/graph/badge.svg" alt="Codecov" />
</a>
  <a href="https://npmjs.org/package/@tiaanduplessis/nap">
  <img src="https://img.shields.io/npm/dm/@tiaanduplessis/nap.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/nap">
    <img src="https://img.shields.io/travis/tiaanduplessis/nap.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/nap/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@tiaanduplessis/nap.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/nap.svg)](https://greenkeeper.io/)

```sh
$ npm install @tiaanduplessis/nap
# OR
$ yarn add @tiaanduplessis/nap
```

## Usage

```js
import nap from '@tiaanduplessis/nap'

nap().then(() => console.log('Took a 1 sec nap'))
nap(3000).then(() => console.log('Took a 3 sec nap'))
nap(5000).then(() => console.log('Took a 5 sec nap'))

async function doThings () {
  await nap(4000)
  console.log('Took a 4 sec nap')
}

doThings()

// Took a 1 sec nap
// Took a 3 sec nap
// Took a 4 sec nap
// Took a 5 sec nap
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/nap/issues).

## License

MIT
