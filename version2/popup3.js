//popup3
var delay3 = 9000; //in milleseconds
var hide3 = 11000; 


jQuery(document).ready(function($){
  setTimeout(function(){ showpopup3Popup(); }, delay3);
});

jQuery(document).ready(function($){
    setTimeout(function(){ hidepopup3Popup(); }, hide3);
  });

function showpopup3Popup(){
  if( getCookie('popup3-popup') == ""){
    $('.popup3-overlay').show();
    setCookie('popup3-popup', 'popped', 30);
  }
  else{
    console.log("popup3 popup blocked.");
  }
}


function hidepopup3Popup(){
    if( getCookie('popup3-popup') == ""){
      $('.popup3-overlay').hide();
      setCookie('popup3-popup', 'popped', 30);
    }
    else{
      console.log("popup3 popup blocked.");
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