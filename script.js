$(".heart").hide();
$(".blankheart").dblclick(function() {
    $(".heart").show();
});

$(".blankheart").dblclick(function() {
    $(".blankheart").hide();
});

$(".heart").click(function() {
    $(".blankheart").show();
});

$(".heart").click(function() {
    $(".heart").hide();
});

$(".sa").hide();



$(".cc").click(function() {
    $(".caption").text("Studio Ghibli");
});


$(".cp").click(function() {
    $(".totoro").attr("src", "https://images.unsplash.com/photo-1623562942215-aa05caa9ed24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80");
});

$(".cb").click(function() {
    $(".totoro").css("border", "10px dashed #ccff99");
});

$(".reset").click(function() {
    location.reload();
});

$(".cc").mouseenter(function() {
    $(".cc").css("background-color", "#99ccff");
});

$(".cc").mouseleave(function() {
    $(".cc").css("background-color", "white");
});

$(".cp").mouseenter(function() {
    $(".cp").css("background-color", "#99ccff");
});

$(".cp").mouseleave(function() {
    $(".cp").css("background-color", "white");
});

$(".cb").mouseenter(function() {
    $(".cb").css("background-color", "#99ccff");
});

$(".cb").mouseleave(function() {
    $(".cb").css("background-color", "white");
});

$(".reset").mouseenter(function() {
    $(".reset").css("background-color", "#99ccff");
});

$(".reset").mouseleave(function() {
    $(".reset").css("background-color", "white");
});