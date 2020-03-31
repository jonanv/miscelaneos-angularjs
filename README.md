<p align="center">
    <img src="https://i.imgur.com/bF1WkFW.png" width="300">
</p>

[![NPM Version][npm-badge]][npm-url]
[![Node JS][node-badge]][node-url]
[![Angular JS][angular-badge]][angular-url]
[![License][license-badge]][license-url]

# Site
<!-- ![Spotify angularjs](https://i.imgur.com/B2heenX.png) -->

# Install dependences
in ```miscelaneos-angularjs/```

```bash
npm install
```
or
```bash
yarn install
```

***


# MiscelaneosAngularjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

# Create project
```javascript
ng new NameProject
```

# Start project with browser
```javascript
ng serve -o
```

# Create component without -it(inline-template) -is(inline-styles)
```javascript
ng generate component components/ngStyle -it -is
```
or
```javascript
ng g c components/ngStyle -it -is
```

# Create component without -it(inline-template) -is(inline-styles) spec in some folder
```javascript
ng generate component components/usuario/usuarioNuevo -is -it --spec=false --flat
```
or
```javascript
ng g c components/usuario/usuarioNuevo -is -it --spec=false --flat
```

# Create directive 
```javascript
ng generate directive directives/resaltado
```
or
```javascript
ng g d directives/resaltado
```

# Server local
install global ```sudo npm i -g http-server```

deploy in ```/spotify-angularjs/dist/spotify-angularjs/```

```javascript
http-server
```
or
```javascript
http-server -o
```

[npm-badge]: https://img.shields.io/badge/npm-v6.13.4-brightgreen.svg
[npm-url]: https://www.npmjs.com
[node-badge]: https://img.shields.io/badge/nodejs-v10.18.1-brightgreen
[node-url]: https://nodejs.org/download/release/v10.16.3/
[angular-badge]: https://img.shields.io/badge/angular--CLI-v8.1.3-brightgreen
[angular-url]: https://angular.io/cli/
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
