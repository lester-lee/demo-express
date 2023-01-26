/*
In Node JS, all files are modules. And since everything is 
an object, modules are also objects. What we care about is
the `export` key in the module object.
*/

// console.log(module);

const whatever_i_want = {
  name: "module-file",
  secret: 5,
};

module.exports = whatever_i_want;
