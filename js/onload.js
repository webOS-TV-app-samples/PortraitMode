window.addEventListener("load", function () {
  var rot_sup = document.getElementById("rot_sup");
  var scr_ori = document.getElementById("scr_ori");
  var prev_ori = document.getElementById("prev_ori");

  function orientationCallback(evt) {
    console.log("orientationCallback: " + evt.screenOrientation);
    prev_ori.innerHTML = webOSTVOrientation.getWindowOrientation();
    scr_ori.innerHTML = evt.screenOrientation;
  }

  function resizeCallback() {
    console.log(
      "width x height : " + window.innerWidth + " x " + window.innerHeight
    );
    // TODO: update screen layout
  }

  webOSTVOrientation.addEventListener(orientationCallback, resizeCallback);
  rot_sup.innerHTML = webOSTVOrientation.isSupportRotation();
  prev_ori.innerHTML = webOSTVOrientation.getWindowOrientation();
  scr_ori.innerHTML = webOSTVOrientation.getDeviceOrientation();
});
