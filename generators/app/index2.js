var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?"
      }
    ]);

    this.log("app name", this.answers.name);
    this.log("cool feature", this.answers.cool);


    this.name_answer = await this.prompt({
      type: "input",
      name: "username",
      message: "What's your GitHub username",
      store: true
    });
  }

  writing() {
    this.log("WRITE cool feature", this.answers.cool); // user answer `cool` used
    this.log("WRITE github name", this.name_answer.username);
  }


};
