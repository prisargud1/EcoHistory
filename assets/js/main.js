// выпадающее меню  
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// выпадающее меню  


/* аккордеон */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (getComputedStyle(panel).display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


/* аккордеон */

