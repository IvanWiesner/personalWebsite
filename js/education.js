var schoolContent = [{
        title: "Education Levels",
        titleid: "education",
        image: "../pics/education/uccs.jpg",
        id: "school",
        content: 'Highschool diploma and Associates in general education. Highschool class of 2016 froem Legacy highschool. Associates from University of Colorado Colorado Springs and Front range Community College.',
        contentid: "schoole",
    },
    {
        title: "Code Academy",
        titleid: "academy",
        image: "../pics/education/codeacademy.PNG",
        id: "code",
        content: "Completion of the Javascript, CSS, and HTML courses on the pro version.",
        contentid: "codes",
    },
    {
        title: "Extraciricular",
        titleid: "extra",
        image: "../pics/education/band.jpg",
        id: "band",
        content: 'Was in marching band in highschool in leadership positions. Won the \
        state competiton two times and even marched in the tournament of Roses parade. Business club outside of school where competitions where held based off \
        pitching ideas and going to other schools to compete. Events were at hotels \
        and made it to the finals with my team.',
        contentid: "extras",
    },
];

function initSchoolContent() {
    var allElements = document.createElement('div');
    allElements.classList.add('schoolContent');

    var header = document.createElement('h1');
    header.innerHTML = 'School Content';
    header.id = 'school-Content';
    allElements.appendChild(header);

    for (var i = 0; i < schoolContent.length; i++) {

        var element = document.createElement('div');
        element.innerHTML = '<h2 id=' + schoolContent[i].titleid + '>' + schoolContent[i].title + '</h2>' +
            //<h2 id= name> content </h2> +
            '<img src=' + schoolContent[i].image + ' id=' + schoolContent[i].id + '>' +
            '<p id=' + schoolContent[i].contentid + '>' + schoolContent[i].content + '</p>';
        // string interpolation javascript 
        // dynamically creating html elements in javasctipt
        // looping and arrays and objects in js

        allElements.appendChild(element);

    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initSchoolContent(), false);