var schoolContent = [{
        title: "classes took",
        date: '2018-2020',
        content: 'Business, maths, english, science, emt',
    },
    {
        title: "Legacy Band",
        date: '2018-2020',
        content: 'Was in marching band in highschool in leadership positions. Won the \
        state competiton two times and even marched in the tournament of Roses parade.',
    },
    {
        title: 'DECA',
        date: '2018-2020',
        content: 'Business club outside of school where competitions where held based off \
            pitching ideas and going to other schools to compete. Events were at hotels \
            and made it to the finals with my team.'
    }
];

function initSchoolContent() {

    for (var i = 0; i < schoolContent.length; i++) {

        var element = document.createElement('div');
        element.innerHTML = '<h2>' + schoolContent[i].title + '</h2>' +
            '<p>' + schoolContent[i].date + '</p>' +
            '<p>' + schoolContent[i].content + '</p>';

        document.body.appendChild(element);

    }
}

document.body.addEventListener('load', initSchoolContent(), false);