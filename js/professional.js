document.body.addEventListener('load', initImg(), false);

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