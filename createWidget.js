function createWidget(widgets) {
  
  //console.log('widgets.length: ', widgets.length);
  //console.dir(widgets);
  if (widgets.length <= 5) {
    //console.log('hej');
    if (widgets.length > 0) {
      let lastIndex = widgets.length - 1;
      const xMin = widgets[lastIndex].xPos - widgets[lastIndex].interval;
      const xMax = widgets[lastIndex].xPos + widgets[lastIndex].interval;

      const xPos = Math.floor(Math.random() * 191) + 10;

      /*
      for (let j = 0; j < widgets.length; j++) {
        if(xPos === widgets[j].xPos) {
          xPos = Math.floor(Math.random() * 191) + 10;
        }
      }
*/
      const red = Math.floor(Math.random() * 150) + 106;
      const green = Math.floor(Math.random() * 150) + 106;
      const blue = Math.floor(Math.random() * 150) + 106;



      widgets.push({
        xPos: xPos, // widgets[lastIndex].xPos + 30
        interval: 10,
        xMin: xMin,
        xMax: xMax,
        red: red,  // widgets[lastIndex].red - 10
        green: green,  // widgets[lastIndex].green + 10
        blue: blue, // widgets[lastIndex].blue + 10
        alpha: 50
      });
    } else {
      widgets.push({
        xPos: 23,
        interval: 10,
        xMin: 73,
        xMax: 93,
        red: 250,
        green: 178,
        blue: 182,
        alpha: 50
      });
    }
  

  

  createBar(widgets);
  createRadioButton();
  selectBar();

  if (widgets.length === 5) {
    maximumBarsReached(widgets.length);
  }

  
}



  //console.log('widgets.length: ', widgets.length);
  // console.dir(widgets);
}