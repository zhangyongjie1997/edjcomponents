const ua = window.navigator.userAgent;
export const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export const isWeiXin =
  ua.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
export const isClient = ua.indexOf("Edaijia/") !== -1;
