# NG2 Weather icons

Angular 2+ library to display a group of icons coming from weather-icons by Erik Flowers.

The library is develop thanks to Angular schematics.

## Environment

### Installation

```shell
npm i -g ng-lib-schematics @angular-devkit/core @angular-devkit/schematics-cli

```

### Configuration

After creating an angular-cli

```shell
ng new <library-name> --skip-install
```

Next, we create our library

```shell
schematics ng-lib-schematics:lib-standalone --name <library-name>
```

### To build and publish

If the library contains a package.json, you must run a npm install

At the root of project :

```shell
npm run build:lib
```

To publish into npm:

```shell
cd dist/ && npm publish
```

## References & examples

* tutorial [https://netbasal.com/create-angular-libraries-in-no-time-using-schematics-513cb1e08a5e]()