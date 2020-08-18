const _AgentInfo = {
  deviceType: "",
  // pc or mobile
  systemName: "",
  OSname: "",
  // windows, Android, linux and so on...
  browserName: "",
  //  chrome, safari, firefox, IE and so on...
  browserVer: "",
  //  browser version， important if in IE environment.
  adaptType: 0,
  // A type value, Adapt to the screen due to width
  _init: function _init() {
    _AgentInfo.setDeviceAndOS();

    _AgentInfo.setBrowser();
  },
  setDeviceAndOS: function() {
    let name = "unknown",
      ua = window.navigator.userAgent,
      system = "unknown";

    if (ua.indexOf("Android") != -1) {
      name = "Android";
      system = "Android";
    } else if (ua.indexOf("iPhone") != -1) {
      name = "iPhone";
      system = "iOS";
    } else if (ua.indexOf("SymbianOS") != -1) {
      name = "SymbianOS";
      system = "SymbianOS";
    } else if (ua.indexOf("Windows Phone") != -1) {
      name = "Windows Phone";
      system = "Windows Phone";
    } else if (ua.indexOf("iPad") != -1) {
      name = "iPad";
      system = "iOS";
    } else if (ua.indexOf("iPod") != -1) {
      name = "iPod";
      system = "iOS";
    }

    if (name != "unknown") {
      _AgentInfo.systemName = system;
      _AgentInfo.OSname = name;
      _AgentInfo.deviceType = "mobile";
      return;
    }

    if (ua.indexOf("Windows NT 10.0") != -1) {
      name = "Windows 10";
      system = "Windows";
    } else if (ua.indexOf("Windows NT 6.2") != -1) {
      name = "Windows 8";
      system = "Windows";
    } else if (ua.indexOf("Windows NT 6.1") != -1) {
      name = "Windows 7";
      system = "Windows";
    } else if (ua.indexOf("Windows NT 6.0") != -1) {
      name = "Windows Vista";
      system = "Windows";
    } else if (ua.indexOf("Windows NT 5.1") != -1) {
      name = "Windows XP";
      system = "Windows";
    } else if (ua.indexOf("Windows NT 5.0") != -1) {
      name = "Windows 2000";
      system = "Windows";
    } else if (ua.indexOf("Mac") != -1) {
      name = "Mac/iOS";
      system = "MacOS";
    } else if (ua.indexOf("X11") != -1) {
      name = "UNIX";
      system = "UNIX";
    } else if (ua.indexOf("Linux") != -1) {
      name = "Linux";
      system = "Linux";
    }
    if (system == "unknown" && ua.indexOf("Windows") != -1) {
      system = "Windows";
    }
    _AgentInfo.systemName = system;
    _AgentInfo.OSname = name;
    _AgentInfo.deviceType = "pc";
  },
  setBrowser: function setBrowser() {
    let nAgt = navigator.userAgent;
    let browserName = navigator.appName;
    let fullVersion = "" + parseFloat(navigator.appVersion);
    let majorVersion = parseInt(navigator.appVersion, 10);
    let nameOffset, verOffset, ix;

    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
    } else if (nAgt.indexOf("Trident") != -1) {
      if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        fullVersion = nAgt.substring(verOffset + 5);
      } else {
        fullVersion = "11.0";
      }

      if (fullVersion == 5) {
        fullVersion = "11.0";
      }

      browserName = "IE";
    } else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browserName = "Chrome";
      fullVersion = nAgt.substring(verOffset + 7);
    } else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browserName = "Safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
    } else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browserName = "Firefox";
      fullVersion = nAgt.substring(verOffset + 8);
    } else if (
      (nameOffset = nAgt.lastIndexOf(" ") + 1) <
      (verOffset = nAgt.lastIndexOf("/"))
    ) {
      browserName = nAgt.substring(nameOffset, verOffset);
      fullVersion = nAgt.substring(verOffset + 1);

      if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
      }
    }

    if ((ix = fullVersion.indexOf(";")) != -1)
      fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
      fullVersion = fullVersion.substring(0, ix);
    majorVersion = parseInt("" + fullVersion, 10);

    if (isNaN(majorVersion)) {
      fullVersion = "" + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }

    _AgentInfo.browserName = browserName;
    _AgentInfo.browserVer = fullVersion;
  },
  isMobile: function isMobile() {
    if (_AgentInfo.deviceType == "mobile") {
      return true;
    }

    return false;
  },
  setAdaptType: function setAdaptType() {
    if (screen.width <= 374) {
      _AgentInfo.adaptType = 0;
    } else if (screen.width <= 413) {
      _AgentInfo.adaptType = 1;
    } else {
      _AgentInfo.adaptType = 2;
    }
  }
};
_AgentInfo._init();

export default _AgentInfo;
