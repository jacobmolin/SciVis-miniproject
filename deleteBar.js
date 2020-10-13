function deleteBar(widgets) {
    //console.dir(widgets);
    const i = findCheckedRadio();
    console.log('i (deleteBar()): ', i);

    //console.dir(widgets);
    //console.log('widgets.length: ', widgets.length);

    if (widgets.length > 1) {
        // remove SVG bar
        const svgBar = document.getElementById('bar' + i)
        document.getElementById('TFgraph').removeChild(svgBar)

        // remove radio button label
        const radioLabel = document.getElementById('radioLabel' + i)
        document.getElementById('selectBarRadio').removeChild(radioLabel)

        // remove radio button
        const radioBar = document.getElementById('radioBar' + i)
        document.getElementById('selectBarRadio').removeChild(radioBar)

        //console.dir(widgets);
        //console.log('widgets.length: ', widgets.length);

        // remove widget
        widgets.splice(i, 1);

        console.dir(widgets);
        console.log('widgets.length: ', widgets.length);

        let counter = 0;
        // change indices on HTML-elements so there's no skipping numbers
        for (let j = 0; j <= widgets.length; j++) {
            let radioBarOrder = document.getElementById('radioBar' + j);
            let radioLabelOrder = document.getElementById('radioLabel' + j);
            let svgBarOrder = document.getElementById('bar' + j);


            console.log('j=', j);
            //console.log('innan if');

            if (document.getElementById('radioBar' + j)) {

                console.log('inuti if');
                document.getElementById('radioBar' + j).value = counter;
                document.getElementById('radioBar' + j).id = 'radioBar' + counter;

                document.getElementById('radioLabel' + j).innerHTML = counter + 1;
                document.getElementById('radioLabel' + j).htmlFor = 'radioBar' + counter;
                document.getElementById('radioLabel' + j).id = 'radioLabel' + counter;

                svgBarOrder.id = 'bar' + counter
                
                ++counter;
            }

            console.log(radioBarOrder);
            console.log(radioLabelOrder);

        }



        // remove maxBarWarning
        const maxBarWarning = document.getElementById('maxBarWarning');


        if (maxBarWarning && widgets.length < 5) {
            document.getElementById('selectBarRadio').removeChild(maxBarWarning);
        }


        if (widgets.length === 1) {
            document.getElementById('deleteBarButton').disabled = true;
        } if (widgets.length < 5) {
            document.getElementById('createBarButton').disabled = false;
        }


        //console.dir(widgets);
        //console.log('widgets.length-1 pre-select: ', widgets.length-1);

        // select highest numbered radio button
        let radio = document.getElementById('radioBar' + (widgets.length - 1));
        //console.log(radio);
        radio.checked = true;
    }
}