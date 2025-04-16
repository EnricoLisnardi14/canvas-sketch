const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  orientation: 'portrait', //landscape
  units: 'mm', //in, cm, pt
  pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let testo = "EL";
    let fontSize = 150;
    let fontFamily = "verdana";

    context.font = fontSize + "px " + fontFamily;
    context.textBaseline = "bottom";
    context.textAlign = "center";
    context.fillStyle = "rgb(93, 0, 255)";

    context.fillText(testo, width/2, height/2);

  };
};

canvasSketch(sketch, settings);
