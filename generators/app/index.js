var Generator = require('yeoman-generator');

module.exports = class extends Generator {

 async prompting() {
    const self = this;
    self.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "Project description",
        default: this.appname + " web application"
      }, 
      {
        type: 'list',
        name: 'license',
        message: 'What license should be used?',
        choices: ['UNLICENSED', 'MIT'],
        default: 'MIT',
      }
    ]);

    this.log("app name", self.answers.name);
    this.log("app description", self.answers.description);
    this.log("app license", self.answers.license);

 }

 writing() {

    this.fs.copy(
      this.templatePath('testfolder'),
      this.destinationPath(this.answers.name)
    );
  }



};
