function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="a"&& password=="a")
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