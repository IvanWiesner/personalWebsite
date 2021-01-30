function createWorkContent() {

    var workContainer = document.createElement('div');
    workContainer.id = 'home-Content';

        for (var i = 0; i < allWorkContent.length; i++) { 
            var workElement = document.createElement('div');
        workElement.classList.add('work-element');
        workElement.innerHTML = 
        '<div class="left-work-element">' +
                '<h2>' + allWorkContent[i].schooling + '</h2>' +
                '<p>' + allWorkContent[i].extracurricular + '</p>' + 
            '</div>' + 
            '<div class="right-work-element">' + 
                '<img src="' + allWorkContent[i].img + '" />' + 
            '</div>';
            var allWorkContent
var allWorkContent = [
    title: 'Contacts',
    descriptions: '(720) 648-7698',
    descriptions: 'ivanwiesner@gmail.com',
    
        
]