const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title : " + argv.title);
    console.log("Title : " + argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("Removing note");
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing all notes");
  },
});

yargs.command({
  command: "read",
  describe: "Read note",
  handler: function () {
    console.log("Read a note");
  },
});

console.log(yargs.argv);

// const validator = require("validator");
// console.log(getNotes());
// console.log(validator.isEmail("gmail.com"));
// console.log(validator.isURL("itsmanoj.contact@gmail.com"));
