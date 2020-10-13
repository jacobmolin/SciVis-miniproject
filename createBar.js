function createBar(widgets) {
  const widget = widgets[widgets.length - 1];
  const xmlns = "http://www.w3.org/2000/svg";
  let newBar = document.createElementNS(xmlns, "rect");
  newBar.setAttribute('id', 'bar' + (widgets.length-1));
  
  newBar = constructBar(newBar, widget);
  
  document.getElementById('TFgraph').appendChild(newBar);
}
