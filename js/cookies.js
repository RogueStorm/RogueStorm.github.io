// Get the modal
    //alert("Start Script.");
    
var modal = document.getElementById("myModal");
    
// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
   var loadModal = function() {
    modal.style.display = "block";
    };
        
    //window.onload = loadModal;
    //alert("Just about to load.");
    alert("0");
    window.onload = doCookieCheck("myCookie");
    
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    
    
function setCookie(name,value,days) {
    var expires = "";
    alert("In Set Cookie.")
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    
    alert(name + "=" + (value || "")  + expires + "; path=/");
    
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
    
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
    
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    alert("In Get Cookie.")
    alert(name);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
    
function doCookieCheck(cookieName) {
    alert("In Do Cookie Check.");
    var myCookie = getCookie(cookieName);
    alert("xxx");
    alert(myCookie);
   
    if (myCookie == null) {
        // do cookie doesn't exist stuff;
        alert("Cookie doesn't exist.");
        setCookie(cookieName,"Exists", 60);
    }
    else {
        alert("Cookie exists.");
        // do cookie exists stuff
    }
}
    
    
//var x = getCookie('ppkcookie');
//if (x) {
//    [do something with x]
//    else
//    [ create cookie]
//}
    
