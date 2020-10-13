function updateSVG(widgets) {
  if (widgets.length > 0) {
    const i = findCheckedRadio();
    const bar = document.getElementById('bar' + i);
    const widget = widgets[i];
    
    constructBar(bar, widget);
  }
}
