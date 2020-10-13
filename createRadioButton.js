function createRadioButton() {
  let newRadioButton = document.createElement('INPUT');
  let newRadioLabel = document.createElement('LABEL');
  let firstBar = document.getElementById('radioBar0');
  let largestBar = firstBar;
  let i = 0;
  let newID = "radioBar" + i;

  while (largestBar) {
    i++;
    newID = "radioBar" + i;
    largestBar = document.getElementById(newID);
  }
  console.log('--------------');
console.log('i (createRadio): ', i);
  if (i <= 4) {
    if (i > 0) {
      document.getElementById('deleteBarButton').disabled = false;
    }

    newRadioButton.setAttribute("id", newID);
    newRadioButton.setAttribute("type", "radio");
    newRadioButton.setAttribute("name", "barRadio");
    newRadioButton.setAttribute("value", i);
    newRadioButton.setAttribute("onclick", "selectBar()");
    newRadioButton.setAttribute("checked", true);

    newRadioLabel.setAttribute("id", 'radioLabel' + i);
    newRadioLabel.setAttribute("for", newID);
    newRadioLabel.innerHTML = i + 1;

    document.getElementById('selectBarRadio').appendChild(newRadioButton);
    document.getElementById('selectBarRadio').appendChild(newRadioLabel);
  }/*
  else {
    maximumBarsReached(i);
  }*/
  
  return newRadioButton;
}
