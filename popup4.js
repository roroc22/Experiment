//popup4
var delay4 = 12000; //in milleseconds
var hide4 = 14000; 


jQuery(document).ready(function($){
  setTimeout(function(){ showpopup4Popup(); }, delay4);
});

jQuery(document).ready(function($){
    setTimeout(function(){ hidepopup4Popup(); }, hide4);
  });

function showpopup4Popup(){
  if( getCookie('popup4-popup') == ""){
    $('.popup4-overlay').show();
    setCookie('popup4-popup', 'popped', 30);
  }
  else{
    console.log("popup4 popup blocked.");
  }
}


function hidepopup4Popup(){
    if( getCookie('popup4-popup') == ""){
      $('.popup4-overlay').hide();
      setCookie('popup4-popup', 'popped', 30);
    }
    else{
      console.log("popup4 popup blocked.");
    }
  }

function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = jQuery.trim(ca[i]);
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}