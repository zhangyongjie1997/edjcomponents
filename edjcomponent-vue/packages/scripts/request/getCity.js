import { getOpenRequest } from "./request";

export default function getCity(data) {
  Object.assign(data, {
    gpsType: "baidu"
  });
  return getOpenRequest("gps/location", data);
}
