var Generator = require('yeoman-generator');

//module.exports = class extends Generator {};

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // This makes `appname` a required argument.
      this.argument("appname", { type: String, required: true });

      // And you can then access it later; e.g.
      this.log(this.options.appname);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag


    // This makes `appname` a required argument.
    this.argument("appname", { type: String, required: true });

    // And you can then access it later; e.g.
    this.log(this.options.appname);

    // This method adds support for a `--coffee` flag
    this.option("coffee");

    // And you can then access it later; e.g.
    this.scriptSuffix = this.options.coffee ? ".coffee" : ".js";


    this.helperMethod = function () {
      console.log('won\'t be called automatically');
    };
/*
    prompting(){
      method3() {
        this.log('method 3 just ran');

      }
      method4() {
        this.log('method 4 just ran');
      }
    }*/

  }
/*
  initializing: {
    method() {
      this.log('method 0 just ran');
    },
    method5() {
      this.log('method 5 just ran');
    }
  }*/

  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  asyncTask() {
  var done = this.async();

/*
  getUserEmail(function (err, name) {
    done(err);
  });*/
}


  _private_method() {
    console.log('private hey');
  }


};



/*
class MyBase extends Generator {
  helper() {
    console.log('methods on the parent generator won\'t be called automatically');
  }
}

module.exports = class extends MyBase {
  exec() {
    this.helper();
  }
};*/
