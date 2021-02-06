document.body.addEventListener('load', initNavBar(), false);
document.head.addEventListener('load', initHead(), false);


createWorkContent();


function initNavBar() {
    var navBar = document.createElement('div');
    navBar.classList.add('nav');
    navBar.innerHTML =
        "<div class='leftNav'>" +
        "<h1>Ivan Wiesner</h1>" +
        "</div>" +
        "<div class='rightNav'>" +
        "<ul class='menuItems'>" +
        "<li><a href='./education.html'>Education</a></li>" +
        "<li><a href='./professional.html'>Professional</a></li>" +
        "<li><a href='./contact.html'>Contact</a></li>" +
        "<li><a href='./about.html'>About me</a></li>" +
        "</ul>" +
        "</div>";
    document.body.appendChild(navBar);
}

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

function createWorkContent() {

    var workContainer = document.createElement('div');
    workContainer.id = 'work-container';

    for (var i = 0; i < allWorkContent.length; i++) {

        var workElement = document.createElement('div');
        workElement.classList.add('work-element');
        workElement.innerHTML =
            '<div class="left-work-element">' +
            '<h2>' + allWorkContent[i].title + '</h2>' +
            '<p>' + allWorkContent[i].dates + '</p>' +
            '<p>' + allWorkContent[i].description + '</p>' +
            '</div>' +
            '<div class="right-work-element">' +
            '<img src="' + allWorkContent[i].img + '" />' +
            '</div>';

        workContainer.appendChild(workElement);
    }
    document.body.appendChild(workContainer);
}
jQuery(document).ready(function(){
    $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
 });