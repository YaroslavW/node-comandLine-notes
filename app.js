const yargs = require("yargs");
const pkg = require("./package.json");

// yargs.version("10.20.30");
yargs.version(pkg.version);

yargs.command({
  command: "add",
  description: "Добавление заметки",
  handler() {
    console.log("Add note"); //node app add
  }
});

yargs.command({
  command: "list",
  description: "Показаь список заметок",
  handler() {
    console.log("List command");
  }
});

yargs.command({
  command: "read",
  description: "Показывает контент выбранной заметки",
  handler() {
    console.log("Read command");
  }
});

yargs.command({
  command: "remove",
  description: "Удаляет заметку",
  handler() {
    console.log("Remove command");
  }
});
// node app --help  Show list commands
yargs.parse();
