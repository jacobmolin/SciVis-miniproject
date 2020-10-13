

/// This function is called when the transfer function texture on the GPU should be
/// updated.  Whether the transfer function values are computed here or just retrieved
/// from somewhere else is up to decide for the implementation.
///
/// @param gl the OpenGL context
/// @param transferFunction the texture object that is updated by this function
function updateTransferFunction(gl, transferFunction, widgets) {
  // Create a new array that holds the values for the transfer function.  The width of 256
  // is also hard-coded further down where the transferFunctionTexture OpenGL object is
  // created, so if you want to change it here, you have to change it there as well.  We
  // multiply the value by 4 as we have RGBA for each pixel.
  // Also we created the transfer function texture using the UNSIGNED_BYTE type, which
  // means that every value in the transfer function has to be between [0, 255]

  // This data should, at the end of your code, contain the information for the transfer
  // function.  Each value is stored sequentially (RGBA,RGBA,RGBA,...) for 256 values,
  // which get mapped to [0, 1] by OpenGL
  let data = new Uint8Array(256 * 4);


  ////////////////////////////////////////////////////////////////////////////////////////
  /// Beginning of the provided transfer function

  // The provided transfer function that you'll replace with your own solution is a
  // relatively simple ramp with the first 50 values being set to 0 to reduce the noise in
  // the image.  The remainder of the ramp is just using different angles for the color
  // components
  const cutoff = 50;

  //if (widgets.length > 0) {
  const j = findCheckedRadio();

  const red = parseInt(document.getElementById('redInput').value);
  const green = parseInt(document.getElementById('greenInput').value);
  const blue = parseInt(document.getElementById('blueInput').value);
  const alpha = parseInt(document.getElementById('alphaInput').value);
  const interval = parseInt(document.getElementById('intervalInput').value);
  const location = parseInt(document.getElementById('xPosInput').value);

  const min = location - interval;
  const max = location + interval;

  widgets[j] = ({
    xPos: location,
    interval: interval,
    xMin: min,
    xMax: max,
    red: red,
    green: green,
    blue: blue,
    alpha: alpha
  });


  // set first indexes up to RGBA*cutoff to 0 to skip noise/air
  for (let i = 0; i < cutoff * 4; i += 4) {
    // Set RGBA all to 0
    data[i] = 0;
    data[i + 1] = 0;
    data[i + 2] = 0;
    data[i + 3] = 0;
    counter = i;
  }


  // Build block upwards   
  widgets.map(function (elem) {
    for (let i = elem.xPos * 4; i < elem.xMax * 4; i += 4) {
      if (elem.alpha > 0) {
        data[i] = elem.red;
        data[i + 1] = elem.green;
        data[i + 2] = elem.blue;
        data[i + 3] = elem.alpha;
      };
    }
  });

  // Build block downwards
  widgets.map(function (elem) {
    for (let i = elem.xMin * 4; i < elem.xPos * 4; i += 4) {
      if (elem.alpha > 0) {
        data[i] = elem.red;
        data[i + 1] = elem.green;
        data[i + 2] = elem.blue;
        data[i + 3] = elem.alpha;
      };
    }
  });

   /*for (let i = min * 4; i < location * 4; i += 4) {
    if (widgets[j].alpha > 0) {
      data[i] = widgets[j].red;
      data[i + 1] = widgets[j].green;
      data[i + 2] = widgets[j].blue;
      data[i + 3] = widgets[j].alpha;
    };
  }
*/

  //console.dir(data);
  updateSVG(widgets);

  // Upload the new data to the texture
  console.log(117, "Updating the transfer function texture");
  gl.bindTexture(gl.TEXTURE_2D, transferFunction);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
}
