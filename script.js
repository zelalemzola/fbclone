var settingsMenu = document.querySelector(".settings-menu")
var darkbtn= document.getElementById("dark-btn")
function settingsMenuToggle()
{
      settingsMenu.classList.toggle("settings-menu-height")
}
 darkbtn.onclick = function () {
    darkbtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
 }

 localStorage.setItem("theme","light");
 localStorage.getItem("theme");
 if(localStorage.getItem("theme") == "light")
 {
    
 }