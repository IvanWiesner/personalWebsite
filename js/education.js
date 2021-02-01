var schoolContent = [{
        title: "Education Levels",
        content: 'Highschool diploma and Associates in general education. Highschool class of 2016 froem Legacy highschool. Associates from University of Colorado Colorado Springs and Front range COmmunity College.',
    },
    {
        title: "Extraciricular",
        content: 'Was in marching band in highschool in leadership positions. Won the \
        state competiton two times and even marched in the tournament of Roses parade. Business club outside of school where competitions where held based off \
        pitching ideas and going to other schools to compete. Events were at hotels \
        and made it to the finals with my team.'
    }
];

function initSchoolContent() {

    for (var i = 0; i < schoolContent.length; i++) {

        var element = document.createElement('div');
        element.innerHTML = '<h2>' + schoolContent[i].title + '</h2>' +
            '<p>' + schoolContent[i].content + '</p>';

        document.body.appendChild(element);

    }
}

document.body.addEventListener('load', initSchoolContent(), false);