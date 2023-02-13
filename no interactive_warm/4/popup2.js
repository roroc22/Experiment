//popup2
var delay2 = 6000; //in milleseconds
var hide2 = 8000; 


jQuery(document).ready(function($){
  setTimeout(function(){ showpopup2Popup(); }, delay2);
});

jQuery(document).ready(function($){
    setTimeout(function(){ hidepopup2Popup(); }, hide2);
  });

function showpopup2Popup(){
  if( getCookie('popup2-popup') == ""){
    $('.popup2-overlay').show();
    setCookie('popup2-popup', 'popped', 30);
  }
  else{
    console.log("popup2 popup blocked.");
  }
}


function hidepopup2Popup(){
    if( getCookie('popup2-popup') == ""){
      $('.popup2-overlay').hide();
      setCookie('popup2-popup', 'popped', 30);
    }
    else{
      console.log("popup2 popup blocked.");
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