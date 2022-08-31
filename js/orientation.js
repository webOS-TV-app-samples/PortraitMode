var webOSTVOrientation = (function () {
  function isSupportRotation() {
    return webOSSystem.currentOrientation !== undefined;
  }

  function getDeviceOrientation() {
    return webOSSystem.screenOrientation;
  }

  function getWindowOrientation() {
    return webOSSystem.currentOrientation;
  }

  function addEventListener(orientationCallback, resizeCallback) {
    document.addEventListener("screenOrientationChange", function (e) {
      webOSSystem.setWindowOrientation(e.screenOrientation);
      orientationCallback(e);
    });
    document.addEventListener("resize", function () {
      resizeCallback();
    });
  }

  return {
    isSupportRotation: isSupportRotation,
    getDeviceOrientation: getDeviceOrientation,
    getWindowOrientation: getWindowOrientation,
    addEventListener: addEventListener,
  };
})();
