var schoolContent = [{
        title: "University of Colorado, Colorado Springs",
        image: "pics/education/cu.jpg",
        content: 'Obtained associates degree, with a focus in bussiness core principals. Focused courses include \
            principals of microeconomics, principals of macroeconomics, business law, international marketing, algebraic literacy, \
            legal enviornment of business, accounting principals, and public speaking. Also completed numerous hard science courses \
            including geology, anatomy, and phisiology. ',
        date: "September 2016 - August 2020"
    },
    {
        title: "Codecademy",
        image: "pics/education/code.jpg",
        content: "Independantly completed numerous modules focused on web development. Modules included 'Learn HTML', 'Learn CSS', and \
            'Learn Javascript'. Learned about the basics of web design, design structure, and core programming principals. Also completed \
            readings for further study through the following texts; Head First HTML and CSS, and Head First Javascript Programming by Eric \
            Freeman and Elisabeth Robson.  ",
        date: "August 2020 - February 2021"
    },
    {
        title: "Legacy High School",
        image: "pics/education/band.jpg",
        content: 'Graduated with the class of 2016. Lettered in the one of the states top marching bands all four years; taking first in the \
        state in 2015 and 2016, and taking second the two prior years. Senior year got to participate in the nationally televised event, the \
        tournemant of Roses parade (Rose Bowl) in Pasadena, California. <br>Some other clubs included the Distributed Education Clubs of America \
        (DECA), which is a is a bussiness focused club that included mock trials, business pitches, and state-wide business competitions. ',
        date: "September 2012 - June 2016"
    },
];

function initSchoolContent() {
    var allElements = document.createElement('div');
    allElements.classList.add('schoolContent');

    for (var i = 0; i < schoolContent.length; i++) {

        var contentDiv = document.createElement('div');
        contentDiv.classList.add('education-content');

        var leftDiv = document.createElement('div');
        leftDiv.classList.add('education-left');
        leftDiv.innerHTML = '<h2>' + schoolContent[i].title + '</h2>' +
            '<p>' + schoolContent[i].date + '</p>' +
            '<p>' + schoolContent[i].content + '</p>';

        var rightDiv = document.createElement('div');
        rightDiv.classList.add('education-right');
        rightDiv.innerHTML = `<img src="${schoolContent[i].image}">`;
        
        contentDiv.appendChild(leftDiv);
        contentDiv.appendChild(rightDiv);

        allElements.appendChild(contentDiv);

    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initSchoolContent(), false);

