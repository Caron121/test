$(function() {
    $.get("mainbav.html", function(data) {
        $("#mainbav").html(data);
    })
    $.get("footer.html", function(data) {
        $("#footer").html(data);
    })
});