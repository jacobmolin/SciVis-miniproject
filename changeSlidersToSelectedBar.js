function changeSlidersToSelectedBar() {
  let i = findCheckedRadio();
  let bar = widgets[i];

  document.getElementById('redInput').value = bar.red;
  document.getElementById('greenInput').value = bar.green;
  document.getElementById('blueInput').value = bar.blue;
  document.getElementById('alphaInput').value = bar.alpha;

  document.getElementById('intervalInput').value = bar.interval;
  document.getElementById('xPosInput').value = bar.xPos;
}
