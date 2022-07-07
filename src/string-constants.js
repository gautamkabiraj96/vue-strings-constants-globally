import * as allStrings from "./strings";

const stringConstants = {
  ...allStrings
};

stringConstants.install = function (Vue) {
  Vue.prototype.$stringConstants = (key) => {
    return stringConstants[key];
  };
};

export default stringConstants;
