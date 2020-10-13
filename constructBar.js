function constructBar(bar, widget) {
    const barWidth = (widget.xMax - widget.xMin);
    const svgGraphHeight = document.getElementById('TFgraph').getAttribute('height');
    
    bar.setAttribute('x', widget.xPos - barWidth / 2);
    bar.setAttribute('y', svgGraphHeight - widget.alpha);
    bar.setAttribute('width', barWidth);
    bar.setAttribute('height', widget.alpha);

    bar.style.fill = 'rgb(' + widget.red + ',' + widget.green + ',' + widget.blue + ')';
    bar.style.strokeWidth = '1';
    bar.style.stroke = 'rgb(50,50,50)';

    return bar;
}