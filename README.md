# Angular with Webpack 2

## Prerequisites
1. Install [git](https://git-scm.com)
2. Install [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com) for [Angular4](https://angular.io/docs/ts/latest/quickstart.html)

## Setup Local Development Server
1. `npm install`
2. `npm start` 
    - be sure that no other application is listening on port 3000
    - if you need to switch to another port adapt config/webpack.dev.js
    
## Setup Debugging Environment
1. Make sure to use IntelliJ/Webstorm Ultimate in the version 2017.1 or higher
1. Install the [JetBrains Chrome Plugin](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji?hl=en)
1. Create a new run configuration in IntelliJ
   1. `Run –> Edit configurations… –> Add –> JavaScript Debug`
   1. Name the configuration `Debug Angular-Ui`
   1. Add `http://localhost:3000` as URL
   1. Choose Browser `Chrome` instead of `default`
   1. Press OK
1. Use the debug button to run the debugger.
1. Now breakpoints can be set anywhere in the code. IntelliJ/Webstorm even shows if the breakpoint is reachable or not by
   showing a hook or a cross in the breakpoint.

**IMPORTANT: always make sure to run** `npm start` **first! Otherwise the app is not running and therefore not loading
   when running the debugger.**

Note: Debugging only works if no other JetBrains IDE is currently using the standard web debug port 63342.

## Codestyle
### IntelliJ Code Style
Import the `IntelliJ Code Style.xml` into `File -> Settings -> Editor -> Code Style`. Click on the gear wheel and choose
  import IntelliJ Code Style xml.

###TSLint
1. Go to `File -> Settings -> Language and Frameworks -> TypeScript -> TSLint`
2. Set `Enabled` to true
3. Press `OK` 

Usually IntelliJ finds the `tslint.json` automatically, otherwise configure it in the same window yourself.  

### Automatically fix issues
Use the <kbd>Alt<kbd> + <kbd>Enter<kbd> shortcut to quickly fix TSLint errors by selecting `TSLint: Fix current ...`

In most cases, the shortcut <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>L</kbd> (auto-format) automatically fixes most issues. If you press 
<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd>L</kbd>, you can configure it to auto fix the imports also which is very useful. 

#### Fix all issues at once
1. Install TSLint global
2. Go to this directory and start the command line
3. run `tslint --fix ./src/**/*.ts`

Most errors will be fix automatically. More complex ones need to be resolved manually still! 


## Production Build
After step 3 at setting up local development server do
1. `npm run build` (please note that production build is only triggerd if linting returns with no errors!)
2. optional: if you want to serve the production build
    - `npm run build:serve`

### API Documentation
The production build also adds a automatically generated **documentation** which can be found at `/dist/doc/index.html`.
It is generated by the comments describing a class/method/member.
    
## Just do Linting
1. `npm run lint`


## Generate Example.war
**BEFORE** building the production build or the war file, it must be ensured, that the ``<base href="/">`` is changed to ``<base href="./">``,
 otherwise it will not work if hosted on tomcat. For more information, [see here](http://stackoverflow.com/questions/39018765/deploy-angular-2-app-with-webpack-to-tomcat-404-errors).

1. Do production build
2. `npm run war`

or alternatively
1. Do production build
2. `cd dist`
3. `jar cvf example.war .`


## Thanks
Most of the configuration was initially developed in the [Winery](https://github.com/eclipse/winery) project.