import axios from "axios";
import * as config from "./config";
import * as md5 from "md5-js";
import Toast from "../../components/toast";
import Loading from "../../components/loading";

axios.defaults.timeout = 5000;
axios.defaults.retry = 4;
axios.defaults.baseURL = config.URL.url_open;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

const stringify = data => {
  let value = "";
  for (const prop in data) {
    value += prop + "=" + encodeURIComponent(data[prop]) + "&";
  }
  return value.substr(0, value.length - 1);
};
const getSig = param => {
  let paramStr = [];
  const paramStrSorted = [];
  for (const n in param) {
    paramStr.push(n);
  }
  paramStr = paramStr.sort();
  paramStr.forEach(item => {
    paramStrSorted.push(item + param[item]);
  });
  const text = config.MD5KEY + paramStrSorted.join("") + config.MD5KEY;
  return md5(text).slice(0, 30);
};
const dateFormat = (date, format) => {
  format = format || "yyyy-MM-dd hh:mm:ss";
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

axios.interceptors.request.use(
  config => {
    if (config.method == "post" || config.method == "POST") {
      config.data = stringify(config.data);
    }
    return config;
  },
  error => {
    Toast.show("网络错误请重试！");
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    Toast.show("网络错误请重试！");
    Loading.close();
    return Promise.reject(error);
  }
);

export const getWxRequest = (url, data = {}) => {
  data.timestamp = dateFormat(new Date());
  const requestData = {
    ...data,
    ...config.DEFAULT_REQUEST_DATA
  };
  const sig = getSig(requestData);
  return new Promise((resolve, reject) => {
    axios({
      baseURL: config.URL.url_weixin,
      url: url,
      method: "GET",
      params: { ...requestData, sig }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const postWxRequest = (url, data = {}) => {
  data.timestamp = dateFormat(new Date());
  const requestData = {
    ...data,
    ...config.DEFAULT_REQUEST_DATA
  };
  const sig = getSig(requestData);
  return new Promise((resolve, reject) => {
    axios({
      baseURL: config.URL.url_weixin,
      url: url,
      method: "POST",
      params: { ...requestData, sig }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const getActivityRequest = (url, data = {}) => {
  data.timestamp = dateFormat(new Date());
  const requestData = {
    ...data,
    ...config.DEFAULT_REQUEST_DATA
  };
  const sig = getSig(requestData);
  return new Promise((resolve, reject) => {
    axios({
      baseURL: config.URL.url_activity,
      url: url,
      method: "GET",
      params: { ...requestData, sig }
    })
      .then(res => {
        if (res.data.code != 0) {
          if (res.data.code == 1 || res.data.message.indexOf("token") > -1) {
            Toast.show(
              "您的登录信息已失效，请在“设置”中退出账号，重新登录！",
              1000 * 4
            );
          }
        }
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const postActivityRequest = (url, data = {}) => {
  data.timestamp = dateFormat(new Date());
  const requestData = {
    ...data,
    ...config.DEFAULT_REQUEST_DATA
  };
  const sig = getSig(requestData);
  return new Promise((resolve, reject) => {
    axios({
      baseURL: config.URL.url_activity,
      url: url,
      method: "POST",
      params: { ...requestData, sig }
    })
      .then(res => {
        if (res.data.code != 0) {
          if (res.data.code == 1 || res.data.message.indexOf("token") > -1) {
            Toast.show(
              "您的登录信息已失效，请在“设置”中退出账号，重新登录！",
              1000 * 4
            );
          }
        }
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const getOpenRequest = (url, data = {}) => {
  data.timestamp = dateFormat(new Date());
  const requestData = {
    ...data,
    ...config.DEFAULT_REQUEST_DATA
  };
  const sig = getSig(requestData);
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: "GET",
      params: { ...requestData, sig }
    })
      .then(res => {
        if (res.data.code != 0) {
          if (res.data.code == 1 || res.data.message.indexOf("token") > -1) {
            Toast.show(
              "您的登录信息已失效，请在“设置”中退出账号，重新登录！",
              1000 * 4
            );
          }
        }
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const postOpenRequest = (url, data = {}) => {
  data.timestamp = dateFormat(new Date());
  const requestData = {
    ...data,
    ...config.DEFAULT_REQUEST_DATA
  };
  const sig = getSig(requestData);
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: "POST",
      data: { ...requestData, sig }
    })
      .then(res => {
        if (res.data.code != 0) {
          if (res.data.code == 1 || res.data.message.indexOf("token") > -1) {
            Toast.show(
              "您的登录信息已失效，请在“设置”中退出账号，重新登录！",
              1000 * 4
            );
          }
        }
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
