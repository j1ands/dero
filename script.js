jQuery(function() {
    
    var url = location.href;
    
    function yeezycheck() {
        var products = $(".span_12.product");
        products.each(function(ind,ele) {
            var link = $(ele).attr("href");
            if(link.indexOf("yeezy") > -1 || link.indexOf("boost") > -1) {
                //$(ele).click();
                window.location = link;
            } else if(ind == products.length - 1) {
                setTimeout(function(){
                    console.log("hey");
                    UpdateOverzicht();
                    yeezycheck();
                }, 1000);
            }
        });
    }
    
    if(url.indexOf("nieuw") > -1) { 
        yeezycheck();
    } else if(url.indexOf("yeezy") > -1 || url.indexOf("boost") > -1) {
        var sizes = $(".primair");
        sizes.each(function(ind,ele){
            if($(ele).text().indexOf("43.5") > -1) {
                $(ele).click();
                $("#bInWinkelMandje").click();
                setTimeout(function(){
                    window.location = "http://www.derodeloper.com/winkelmandje.html";
                }, 750);
            }
        });
    } else if(url.indexOf("winkelmandje") > -1) {
            window.location = $($(".submit.buttonSubmit")[1]).attr("href")
    } else if(url.indexOf("bestellen") > -1) {
        if($(".submit.button.buttonSubmit").text().indexOf("Pay with Multisafepay") > -1) {
            window.location = $(".submit.button.buttonSubmit").attr("href");
        } else {
            $("#naarStap2").click();
            setTimeout(function(){
                $(".buttonSubmit").click();
                setTimeout(function(){
                    $("#ideal").prop("checked", false);
                    $("#visa").prop("checked", true);
                    //$("#uniform-algemenevoorwaarden").addClass("hover");
                    //$("#uniform-algemenevoorwaarden").removeClass("hover");
                    $("#algemenevoorwaarden").prop("checked",true)
                    //setTimeout(function(){
                    $(".buttonSubmit").click();
                    //}, 500);
                    setTimeout(function(){
                        window.location = $(".submit.button.buttonSubmit").attr("href");
                    }, 1000);
                }, 1000);
            }, 1000);

        }
    } else if(url.indexOf("multisafepay") > -1) {
        $("#field-extvar1").val("xxxx");
        $("#field-extvar4").val("xxxx");
        $("#field-extvar2").val("xxxx");
        $("#field-extvar3").val("xxxx");
        $(".extvar.year").val(xxxx);
        $("#button-pay").click();
    }

});