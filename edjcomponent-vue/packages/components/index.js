import Loading from "./loading";
import Toast from "./toast";
import Confirm from "./confirm";

const EdjComponents = Object.create(null);
EdjComponents.Loading = Loading;
EdjComponents.Toast = Toast;
EdjComponents.Confirm = Confirm;

EdjComponents.install = function(Vue) {
  Object.keys(EdjComponents).forEach(key => {
    EdjComponents[key].install(Vue);
  });
};

export default EdjComponents;
