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
                    band: 'Was in marching band in highschool in leadership positions. Won the state competiton two times and even marched in the tournament of Roses parade.'
                    deca: 'Business club outside of school where competitions where held based off pitching ideas and going to other schools to compete. Events were at hotels and made it to the finals with my team.'
                    
            };