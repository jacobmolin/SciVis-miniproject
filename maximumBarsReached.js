function maximumBarsReached(i) {
    let newRadioLabel = document.createElement('div');
    newRadioLabel.setAttribute("id", 'maxBarWarning');
    //let br = document.createElement('br');
    newRadioLabel.setAttribute("for", 'radioBar' + i);
    //document.getElementById('selectBarRadio').appendChild(br);
    newRadioLabel.innerHTML = "Maximum bars reached!";
    document.getElementById('selectBarRadio').appendChild(newRadioLabel);
    document.getElementById('createBarButton').disabled = true;
}