function findCheckedRadio() {
    let i = 0;
    let radio = document.getElementById('radioBar' + i);

    while (!radio.checked) {
        i++;
        radio = document.getElementById('radioBar' + i);
    }
    
    //console.log('i (findCheckedRadio()): ', i);
    //console.log('widgets.length: ', widgets.length);
    //console.dir(widgets);
    return i;
}