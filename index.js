import ObInput from "./packages/input/index.js";
const components = [ObInput];

const install = (Vue) => {
  for (const component of components) {
    Vue.component(component.name, component);
  }
};

export default {
  install,
  ObInput,
};
