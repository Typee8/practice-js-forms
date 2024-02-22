document.addEventListener("DOMContentLoaded", init);

const panel = document.querySelector(".panel");
panel.addEventListener("change", changeBoxShadow);
panel.addEventListener("mousemove", changeBoxShadow);

function changeBoxShadow() {
  let colorInHex = panel.firstElementChild.value;
  let opacity = panel.lastElementChild.value / 100;

  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, colorInHex, opacity);
}

function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#000000");
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")}, 
        ${getChannelColor(colorInHex, "green")}, 
        ${getChannelColor(colorInHex, "blue")}, 
        ${opacity}
    )`;

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
  let start;
  switch (channelName) {
    case "red":
      start = 1;
      break;
    case "green":
      start = 3;
      break;
    case "blue":
      start = 5;
      break;
  }

  const channelColorHex = colorInHex.substr(start, 2);
  const channelColorDec = parseInt(channelColorHex, 16);

  return channelColorDec;
}
