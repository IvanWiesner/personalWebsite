var professional = [
{
    title: 'Banquet Employee',
    titleId: "",
    image: "../pics/professional/hotel.PNG id='hotel' ",
    id: "",
    dates: 'October 2014 - May 2015',
    content: 'Responsibilities included setting up projectors/ tech equipment, customer service to solve problems, and recruit people to join the staff. Very capable in addressing stressful situations calmly and dealing with difficult customers. Assisted in various tasks in opening for new events, while being collaborative and compatible with many areas including management. Personality was highly effective in increasing sales and customer retention while successfully managing full time schooling hours.',
    
},
{
    title: 'Line cook',
    titleId: "",
    image: "../pics/professional/cook.PNG id='cook' ",
    id: "",
    dates: 'May 2015 - May 2017',
    content: 'Responsibilities included recruiting and training new employees, closing duties, re-stocking of supplies. Initiated a productive atmosphere in the kitchen - keeping everyone in line and in sequential order. Ticker master/Multi tasker',
    
},
{
    title: 'Denver Drake Jungler',
    titleId: "",
    image: "../pics/professional/drakes.PNG id='drake' ",
    id: "",
    dates: 'May 2017 - October 2018',
    content: 'Joined semi-pro teams for going pro in league of legends, to see what it would be like.',
    
},
{
    title: 'Streamer',
    titleId: "",
    image: "../pics/professional/stream.PNG id='stream' ",
    id: "",
    dates: 'January 2019 - October 2020',
    content: 'Streamed part time while I went to school instead of working because it was more enjoyable to do.',
}   
];

function initprofessional() {

var allElements = document.createElement('div');
allElements.classList.add('jobs');

var header = document.createElement('h1');
header.innerHTML = 'Work History';
header.id = 'jobs_id';
allElements.appendChild(header);

for (var i = 0; i < professional.length; i++) {

    var element = document.createElement('div');
    element.classList.add('professional-element');
    element.innerHTML = '<h2>' + professional[i].title + '</h2>' +
    '<img src=' + schoolContent[i].image + ' id=' + schoolContent[i].id + '>' + + 
    '<p>' + professional[i].dates + '</p>' +
    '<p>' + professional[i].content + '</p>';
    allElements.appendChild(element);

}
document.body.appendChild(allElements);

}

document.body.addEventListener('load', initprofessional(), false);