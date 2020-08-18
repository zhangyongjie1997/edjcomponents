export function webViewJSBridgeReady(callback) {
  if (window.WebViewJavascriptBridge) {
    callback(window.WebViewJavascriptBridge);
  } else {
    document.addEventListener(
      "WebViewJavascriptBridgeReady",
      function() {
        callback(window.WebViewJavascriptBridge);
      },
      false
    );
  }
}
export function weixinBridgeReady(onBridgeReady) {
  if (typeof WeixinJSBridge == "undefined") {
    document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
  } else {
    onBridgeReady && onBridgeReady();
  }
}
export function alipayBridgeReady(onBridgeReady) {
  if (window.AlipayJSBridge) {
    onBridgeReady && onBridgeReady();
  } else {
    document.addEventListener("AlipayJSBridgeReady", onBridgeReady, false);
  }
}
