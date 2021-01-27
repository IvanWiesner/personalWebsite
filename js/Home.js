document.body.addEventListener('load', initHead(), false);

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
            var allWorkContent = [
                {
                    classes took: 'Business, maths, english, science, emt'
                    dates attended: '2018-2020'
                    schools: 'University of Colorado Colorado Springs and Front Range Community College'
                },
                    band: ''
                    deca: ''
                    achievements: ''
            };