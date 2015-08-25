jQuery(function() {
    //jQuery(".top-menu").hide();
    
    //first item text RTGray12[10]
    //first add to cart img[14]
        //then img[15], img[16]
        //then img[20]
    var items = jQuery(".RTGray12").slice(10);

    for(var count = 0; count < items.length; count++) {
        
        if(items[count].children[0] != undefined && items[count].children[0].text.toLowerCase().indexOf("magic") > -1)
        {
            var cartid = findCart(count+1, 0);
            count = items.length;
            window.open("https://dl.dropboxusercontent.com/u/45487211/Guitar.mp3");
            jQuery("img")[cartid].click();
        }
        
        if(count == (items.length - 1)) {
            setTimeout(function(){
                location.reload(true);
            }, 500);
        }
    }
    
    function findCart(num, count) {
        if(num <= 3){
            return 14 + (6 * count) + num - 1;
        }
        else {
            return findCart(num-3, count+1);
        }
    }
        
    
});

