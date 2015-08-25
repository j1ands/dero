//var s2 = document.createElement('script');
//s2.setAttribute("id", "jquery");
//s2.src = chrome.extension.getURL('jquery.min.js');
//
//document.body.appendChild(s2);

//setTimeout(function(){
var s = document.createElement('script');
s.setAttribute("id", "delo-script");
s.src = chrome.extension.getURL('script.js');
document.body.appendChild(s);
//}, 100);
