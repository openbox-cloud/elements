const OBInput = require("./packages/input/index");
const components = [];

const install = (Vue) => {
  for (const component of components) {
    Vue.component(component.name, component);
  }
};

module.exports = {
  install,
  OBInput,
};
