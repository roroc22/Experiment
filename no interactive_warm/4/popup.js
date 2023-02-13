//popup1
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
//popup3
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
  //popup4
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

