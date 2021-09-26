function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="SAITEJA"&& password=="2001-09-27")
{
 window.location.href="bdayanim.html";
return false;
}
else
{
    alert("login failed");
exit();
}


}
