import getCity from "../request/getCity";
import getUdid from "./udid";
import * as config from "../request/config";
import GPS from "./GPS";
import { isClient } from "./common";
import { webViewJSBridgeReady } from "./jsbridge";
import { StorageLocal } from "./storage";

export default class PageInit {
  constructor() {
    this.storageLocal = new StorageLocal();
    this.isClient = isClient;
    this.init();
  }
  async init() {
    const udid = await getUdid();
    this.storageLocal.set("edaijia_h5_udid", udid);
    config.DEFAULT_REQUEST_DATA.udid = udid;
  }
  getGpsLocation() {
    return new Promise(resolve => {
      let gpsInfo = {
        longitude: "",
        latitude: ""
      };
      if (sessionStorage.lng && sessionStorage.lat) {
        gpsInfo = {
          longitude: sessionStorage.lng,
          latitude: sessionStorage.lat
        };
        resolve(gpsInfo);
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              let coord = GPS.gcj_encrypt(
                position.coords.latitude,
                position.coords.longitude
              );
              coord = GPS.bd_encrypt(coord.lat, coord.lon);
              sessionStorage.lng = coord.lon;
              sessionStorage.lat = coord.lat;
              gpsInfo = {
                longitude: coord.lon,
                latitude: coord.lat
              };
              resolve(gpsInfo);
            },
            () => {
              resolve({
                longitude: "",
                latitude: ""
              });
            },
            {
              enableHighAcuracy: true,
              timeout: 5000
            }
          );
        } else {
          resolve({
            longitude: "",
            latitude: ""
          });
        }
      }
    });
  }
  async getCityId() {
    return new Promise(resolve => {
      if (this.isClient) {
        webViewJSBridgeReady(bridge => {
          bridge.init((message, responseCallback) => {
            if (responseCallback) {
              responseCallback();
            }
          });
          bridge.callHandler("hideShareMenu");
          bridge.callHandler("title", document.title);
          // bridge.callHandler("initShareData", config.getShareData());
          bridge.callHandler("getUser", "", json => {
            json = typeof json === "string" ? eval("(" + json + ")") : json;
            if (json && json.token) {
              let cityId = 0;
              cityId = json.city_id;
              resolve(cityId);
            } else {
              resolve(0);
            }
          });
        });
      } else {
        this.getGpsLocation().then(json => {
          let cityId;
          getCity(json).then(res => {
            if (res.code * 1 == 0) {
              if (res.location.street) {
                cityId = res.location.street.component.cityId;
              } else {
                cityId = 0;
              }
            }
            resolve(cityId);
          });
        });
      }
    });
  }
  getUser() {
    return new Promise(resolve => {
      if (this.isClient) {
        webViewJSBridgeReady(bridge => {
          bridge.init((message, responseCallback) => {
            if (responseCallback) {
              responseCallback();
            }
          });
          bridge.callHandler("hideShareMenu");
          bridge.callHandler("title", document.title);
          // bridge.callHandler("initShareData", config.getShareData());
          bridge.callHandler("getUser", "", json => {
            json = typeof json === "string" ? eval("(" + json + ")") : json;
            if (json && json.token) {
              let cityId = 0;
              cityId = json.city_id;
              config.DEFAULT_REQUEST_DATA.cityId = cityId;
              this.storageLocal.set("phone", json.phone);
              this.storageLocal.set("token", json.token);
              this.storageLocal.set("cityId", json.city_id);
              this.storageLocal.set("name", json.name);
              resolve({ phone: json.phone, token: json.token, cityId: cityId });
            } else {
              bridge.callHandler("nativeLoginAndRefresh");
              resolve({ token: "", phone: "", cityId: 0 });
            }
          });
        });
      } else {
        this.getCityId().then(cityId => {
          if (!cityId || cityId == 0)
            cityId = this.storageLocal.get("cityId") || 0;
          config.DEFAULT_REQUEST_DATA.cityId = cityId;
          let token = this.storageLocal.get("token"),
            phone = this.storageLocal.get("phone");
          this.storageLocal.set("cityId", cityId);
          if (token) {
            resolve({
              token: token,
              phone: phone,
              cityId: cityId
            });
          } else {
            resolve({
              token: "",
              phone: "",
              cityId: cityId
            });
          }
        });
      }
    });
  }
}
