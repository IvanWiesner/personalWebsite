
document.body.addEventListener('load', initNavBar(), false);
document.head.addEventListener('load', initHead(), false);
document.body.addEventListener('load', initImg(), false);

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
            "<li><a href='./index.html'>Home</a></li>" +
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
function initImg() {
    var Img = document.createElement('div');
    Img.classList.add('Img');
    Img.innerHTML = 
    "<div>" +
    "<Img src='../hotel.jpg' id='hotel'>" +
    "<Img src='../face.jpg' id='face'>" +
    "<Img src='../cook.PNG' id='cook'>" +
    "<Img src='../jungle.PNG' id='jungle'>" +
    "<Img src='../drakes.PNG' id='drakes'>" +
    "<Img src='../stream.Png' id='stream'>" +
    "</div>";
    document.body.appendChild(Img);
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

