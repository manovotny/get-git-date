# get-git-date

> Gets the date a file was last modified in a git repo.

## Install

### NPM

```
$ npm i get-git-date
```

### Yarn

```
$ yarn add get-git-date
```

## Usage

```js
const getGitDate = require('get-git-date');

(async () => {
    const filePath = './path/to/some/file.txt';
    const date = await getGitDate(filePath);

    console.log(date);
    // $ 2018-09-02T18:58:18.000Z
})();
```

## License

MIT © [Michael Novotny](https://manovotny.com)
