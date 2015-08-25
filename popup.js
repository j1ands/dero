$(function(){
    var x = $("#sdcc-script");
    if(x.length > 0){  
        $("#script-check").text("Script injected");
    } else {
        $("#script-check").text("Script not injected");
    }
});