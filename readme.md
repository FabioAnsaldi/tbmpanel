# tbmpanel

### Table of contents
1. [EVN configuration files](#env-config)
2. [Webpack](#webpack)
3. [.babelrc](#babelrc)
    1. [import-glob](#glob)
4. [Run environment](#run)
5. [Test environment](#test)
6. [License](#license)

######
##### EVN configuration files <a name="env-config"></a>
We find configuration files into the folder `./config`

`./config/tbmpanel.config.js` It is used to exports environment paths

| Property | Description |
| --- | --- |
| config.configuration | Contains configuration folder path |
| config.source | Contains source folder path |
| config.development | Contains development folder path |
| config.production | Contains production folder path |
| config.bundle | Contains bundle file name |


`./config/webpack.config.js` It is used to set up Webpack module
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
##### Run environment <a name="run"></a>

TO DO

######
##### Test environment <a name="test"></a>

Testing a React-Redux app using Jest and Enzyme.

We are going to use:
`jest ` `babel-jest ` `enzyme  ` `react-addons-test-utils` `react-test-renderer` `redux-mock-combiner`

Look at the [Link](https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9) for more info.

#

###### License <a name="license"></a>

[Triboo SPA - ALL RIGHTS RESERVED](http://www.triboomedia.it/privacy-policy/)

#