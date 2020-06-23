var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

  }

  async initializing (){
    //  this.log("begin")
    await  this.npmInstall(['lit-element','solid-auth-client','scenaristeur/evejs'], { 'save': true });
    await  this.npmInstall(['webpack', 'webpack-cli', 'webpack-dev-server'], { 'save-dev': true });

  }

  /*async install() {
}*/

writing() {
  this.fs.copyTpl(
    this.templatePath(),
    this.destinationPath(),
    { title: 'copy all files' }
  );
  /*
  this.fs.copyTpl(
  this.templatePath('dist/index.html'),
  this.destinationPath('dist/index.html'),
  { title: 'Index in dist' }
);

this.fs.copyTpl(
this.templatePath('webpack.config.js'),
this.destinationPath('webpack.config.js'),
{ title: 'Webpack config' }
);

this.fs.copyTpl(
this.templatePath('src/'),
this.destinationPath('src/'),
{ title: 'Firsts components' }
);*/



const pkgJson = {
  /*  devDependencies: {
  eslint: '^3.15.0'
},
dependencies: {
react: '^16.2.0'
},*/
scripts: {
  test: "echo \"Error: no test specified\" && exit 1",
  dev: "webpack-dev-server -d --hot --config webpack.config.js --watch",
  build: "webpack"
},
};

// Extend or create package.json file in destination path
this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);



}
end(){
  this.fs.copyTpl(
    //this.cp -r node_modules/solid-auth-client/dist-popup/ dist
    this.destinationPath('node_modules/solid-auth-client/dist-popup/'),
    this.destinationPath('dist/dist-popup/'),
    { title: 'copy dist popup' }
  );
  this.log('*******************\n*******************\n*******************\nInstall OK\n*******************\n run "npm run dev"\n*******************\n*******************\n')
}

}
