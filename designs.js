let height, width, color;

//makeGrid is called
$("#sizePicker").submit(function(event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    makeGrid(height, width);
});

function makeGrid(x, y) {
    //size input are selected
    $('tr').remove();
    for (var a = 1; a <= x; a++) {
        //table rows are added
        $("#pixelCanvas").append('<tr id=table' + a + '></tr>');
        for (var b = 1; b <= y; b++) {
            $("#table" + a).append('<td></td>');
        }
    }
    //colors are added
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        //color input are selected
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}

