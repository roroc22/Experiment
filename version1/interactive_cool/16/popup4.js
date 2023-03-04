//popup
var delay4 = 29000; //in milleseconds

jQuery(document).ready(function($){
  setTimeout(function(){ showpopup4Popup(); }, delay4);
  
  $('.popup-close4').click(function(){
      $('.popup4-overlay').hide();
      
      //when closed create a cookie to prevent popup to show again on refresh
      setCookie('popup4-popup', 'popped', 30);
  });
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