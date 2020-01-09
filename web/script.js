$(document).ready(function () {
    $.getJSON("/api", function (result) {
        $("#backend").text = result['message']
    });
});