//popup2
var delay1 = 3000; //in milleseconds
var hide1 = 5000; 


jQuery(document).ready(function($){
  setTimeout(function(){ showpopupPopup(); }, delay1);
});

jQuery(document).ready(function($){
    setTimeout(function(){ hidepopupPopup(); }, hide1);
  });

function showpopupPopup(){
  if( getCookie('newsletter-popup') == ""){
    $('.newsletter-overlay').show();
    setCookie('newsletter-popup', 'popped', 30);
  }
  else{
    console.log("popup2 popup blocked.");
  }
}


function hidepopupPopup(){
    if( getCookie('newsletter-popup') == ""){
      $('.newsletter-overlay').hide();
      setCookie('newsletter-popup', 'popped', 30);
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