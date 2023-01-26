const express = require("express");
const app = express();

require("dotenv").config();

/*
NOTE: this is not real code, just the idea for the pseudocode
app.use((req, res, next)=> {
  if (req.type === "GET") fn();
});
// it tells express to use middleware

app.get();
// syntactic sugar for it's middleware for get requests
*/

/*
const { name, secret } = require("./module-file.js");
console.log(name, secret);
*/

const module_file = require("./module-file");
// I am declaring a new constant variable named module_file
// And assigning it the return value of the require function
// In which the argument "./module-file" is passed

// The require function returns the module.exports from
// the file that was passed in

// const module_file = whatever_i_want;
// const module_file = {name: "module-file",secret: 5,};
// const {name, secret } =  {name: "module-file",secret: 5,};

const module_folder = require("./module-folder");

// const [add10, sub10] = require("./module-folder");
console.log(module_folder[0](5));
// module_folder = [add, subtract]
// module_folder = [(num) => helper + num, (num) => helper - num]
// module_folder = [(num) => helper + num, (num) => helper - num]
// module_folder = [(num) => 10 + num, (num) => 10 - num]
// [add10, sub10] = [(num) => 10 + num, (num) => 10 - num]
// add10(5); // 15
// sub10(5); // 5

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
