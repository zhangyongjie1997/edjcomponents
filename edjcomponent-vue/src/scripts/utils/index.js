import { StorageLocal, StorageSession } from "./storage";
import * as common from "./common";
import _AgentInfo_ from "./agent";
import * as jsbrideg from "./jsbridge";
import pageInit from "./pageInit";

export default {
  StorageLocal,
  StorageSession,
  ...common,
  _AgentInfo_,
  ...jsbrideg,
  pageInit
};
