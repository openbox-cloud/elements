const OBInput = require("./src/input");

OBInput.install = (Vue) => {
  Vue.component(OBInput.name, OBInput);
};

module.exports = OBInput;
