# tbmpanel

### Table of contents
1. [EVN configuration files](#env-config)
2. [Webpack](#webpack)
3. [.babelrc](#babelrc)
    1. [import-glob](#glob)
4. [Create component](#create)
5. [Build the project](#build)
6. [Run environment](#run)
    1. [Run production environment](#production)
    2. [Run develop environment](#develop)
7. [Test environment](#test)
8. [License](#license)

######
##### EVN configuration files <a name="env-config"></a>
We find configuration files into the folder `./config`

`./config/tbmpanel.config.js` It is used to exports environment paths

| Property | Description |
| --- | --- |
| config.paths.assets | Contains root path |
| config.paths.build | Contains build folder path |
| config.paths.bundle | Contains bundle file JS name |
| config.paths.configuration | Contains config folder path |
| config.paths.source | Contains source folder path |
| config.paths.acl.filename | Contains the file name of ACL roles |
| config.paths.acl.defaultRole | Contains the group name of default user of the new panel |
| config.paths.acl.decodedObjectName | Contains the object name of the autentication result |
| | |
| config.OAuth2.AuthorityServerUrl | Contains the API Url to get Token |
| config.OAuth2.clientID | Contains application number to require authentication at API Url |
| config.OAuth2.build | Contains build folder path |
| config.OAuth2.grantType | Contains the command for the API Url |
| | |
| config.googleOAuth2.callbackURL | Contains the TBMpanel for redirect after authentication |
| config.googleOAuth2.clientID | Contains application number to require authentication at API Url |
| config.googleOAuth2.passReqToCallback | Contains enable callback flag |
| config.googleOAuth2.scope | Contains available API resource |
| | |
| config.environment.develop.env | Contains develop environment identifier |
| config.environment.develop.address | Contains develop application hostname |
| config.environment.develop.port | Contains develop application port |
| config.environment.production.env | Contains production environment identifier |
| config.environment.production | Contains production application hostname |
| config.environment.production | Contains production application port |


`./config/webpack.dev.js` It is used to set up Webpack module
######
##### Webpack <a name="webpack"></a>
 We use Webpack to run local environment (local server) and to build the project

| Property | Values | Description | Link |
| --- | --- | --- | --- |
| module.rules | file-loader | Instructs webpack to emit the required object as file and to return its public URL | https://github.com/webpack-contrib/file-loader |
| module.rules | babel-loader | Allows transpiling JavaScript files using | https://github.com/babel/babel-loader |
| module.loaders | style-loader, css-loader | Adds CSS to the DOM by injecting a <style> tag | https://github.com/webpack-contrib/style-loader |
| entry Array | webpack-hot-middleware/client, /index | Instructs webpack about virtual server entry point (localhost:PORT) and index JS file | https://github.com/glenjamin/webpack-hot-middleware |
| plugins Array | HotModuleReplacementPlugin | It compile the hot update chunks for developing environment | https://webpack.js.org/plugins/hot-module-replacement-plugin/ |
| plugins Array | HtmlWebpackPlugin | Used to inject bundle.js file into index.html template | https://github.com/jantimon/html-webpack-plugin |
######

##### .babelrc <a name="babelrc"></a>
Here you can find plugins used into Webpack config that is not supported from Webpack's module plugins configuration.
###### import-glob <a name="glob"></a>
It is used to import all of reducer files from specific folder (components).

######
##### Create component <a name="create"></a>
To create a new component inside the application scaffold:
```sh
npm run create
```
> It drive you step by step to create a new component

######
#### Run environment <a name="run"></a>
There are different environment which you can run

#####
#### Build the project <a name="build"></a>
To build the project for the production environment:
```sh
npm run build
```
> It runs webpack handler to build the project. You can find the files into build folder

######
##### Run production environment <a name="production"></a>
To run the production environment buided previously:
```sh
npm run prod
```
> It runs application with production configuration

######
##### Run develop environment <a name="develop"></a>
To run the develop environment buided previously:
```sh
npm run start
```
> It runs application with develop configuration

######
##### Test application <a name="test"></a>
To run application test
```sh
npm run test
```
> Testing a React-Redux application using Jest and Enzyme.

We are going to use:
`jest ` `babel-jest ` `enzyme  ` `react-addons-test-utils` `react-test-renderer` `redux-mock-combiner`

Look at the [Link](https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9) for more info.

#

###### License <a name="license"></a>

[Triboo SPA - ALL RIGHTS RESERVED](http://www.triboomedia.it/privacy-policy/)

#