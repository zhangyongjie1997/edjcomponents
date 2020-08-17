import { StorageLocal } from "../utils/storage";
import _AgentInfo from "../utils/agent";

const storageLocal = new StorageLocal();

const OPTIONS_DEVELOPMENT = {
  app_id: "wx34f941dbe86392a3",
  url_open: "//open.d.api.edaijia.cn/",
  url_weixin: "//weixin.d.edaijia.cn/",
  url_activity: "//activity.d.edaijia.cn/",
  url_h5: "https://h5.d.edaijia.cn"
};
const OPTIONS_PRODUCTION = {
  app_id: "wx8c8df4a3218410e0",
  url_open: "//open.api.edaijia.cn/",
  url_weixin: "//weixin.edaijia.cn/",
  url_activity: "//activity.edaijia.cn/",
  url_h5: "https://h5.edaijia.cn"
};

let url = OPTIONS_PRODUCTION;

if (location.href.indexOf(".d.edaijia") > -1) {
  url = OPTIONS_DEVELOPMENT;
} else {
  url = OPTIONS_DEVELOPMENT;
}

export const DEFAULT_REQUEST_DATA = {
  appkey: "51000031",
  from: "02050050",
  udid: storageLocal.get("edaijia_h5_udid") || "20000001",
  ver: 3,
  cityId: 0,
  os: _AgentInfo.systemName
};

export const MD5KEY = "0c09bc02-c74e-11e2-a9da-00163e1210d9";
export const URL = url;
