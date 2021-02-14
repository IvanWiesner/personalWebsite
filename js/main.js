document.body.addEventListener('load', initNavBar(), false);
document.head.addEventListener('load', initHead(), false);

function initNavBar() {
    var navBar = document.createElement('div');
    navBar.classList.add('nav');
    navBar.innerHTML =
        "<div class='leftNav'>" +
        "<h1>Ivan Wiesner</h1>" +
        "</div>" +
        "<div class='rightNav'>" +
        "<ul class='menuItems'>" +
        "<li><a class='navItem' id='educ-button' href='./education.html'>Education</a></li>" +
        "<li><a class='navItem' id='prof-button' href='./professional.html'>Professional</a></li>" +
        "<li><a class='navItem' id='contact-button' href='./contact.html'>Contact</a></li>" +
        "<li><a class='navItem' id='bio-button' href='./about.html'>About me</a></li>" +
        "</ul>" +
        "</div>";
    document.body.appendChild(navBar);
}

// document.getElementById("educ-button").addEventListener('click',function() {
//     var navItems = document.querySelectorAll("navItem");
//     for (var i = 0; i < navItems.length; i++) {
//         navItems[i].classList.remove('clicked-on');
//     }
//     this.classList.add('clicked-on');
// });

function initHead() {
    var elements = "<meta charset='utf-8'>" +
        "<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>" +
        "<link rel='preconnect' href='https://fonts.gstatic.com'>" +
        "<link href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap' rel='stylesheet'>" +
        "<link rel='stylesheet' href='../css/Animatedtext.css'>" +
        "<link rel='stylesheet' href='../css/main.css'>" +
        "<title>Ivan Wiesner </title>";
    document.head.innerHTML = elements;
}

