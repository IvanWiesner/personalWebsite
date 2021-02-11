var professional = [{
        title: 'Banquet Employee',
        titleid: "banquet",
        dates: 'October 2014 - May 2015',
        datesid: "banqp",
        image: "../pics/professional/hotel.PNG",
        id: "hotel",
        content: 'Responsibilities included setting up projectors/ tech equipment, customer service to solve problems, and recruit people to join the staff. Very capable in addressing stressful situations calmly and dealing with difficult customers. Assisted in various tasks in opening for new events, while being collaborative and compatible with many areas including management. Personality was highly effective in increasing sales and customer retention while successfully managing full time schooling hours.',
        contentid: "banqc",
    },
    {
        title: 'Line cook',
        titleid: "line",
        dates: 'May 2015 - May 2017',
        datesid: "cookp",
        image: "../pics/professional/cook.PNG",
        id: "cook",
        content: 'Responsibilities included recruiting and training new employees, closing duties, re-stocking of supplies. Initiated a productive atmosphere in the kitchen - keeping everyone in line and in sequential order. Ticker master/Multi tasker',
        contentid: "cookc",
    },
    {
        title: 'Denver Drake Jungler',
        titleid: "denver",
        dates: 'May 2017 - October 2018',
        datesid: "denverp",
        image: "../pics/professional/drakes.PNG",
        id: "drake",
        content: 'Joined semi-pro teams for going pro in League of Legends, to see what it would be like. Although I enjoyed it alot I realized I had alot of room for improvement in comparsion vs acutal pro team. After seeing this I decided it would take too long to reach that.',
        contentid: "denverc",
    },
    {
        title: 'Streamer',
        titleid: "streamer",
        dates: 'January 2019 - October 2020',
        datesid: "streamp",
        image: "../pics/professional/stream.PNG",
        id: "stream",
        content: 'Streamed part time while I went to school instead of working because it was more enjoyable to do. Its pretty much a self run youtube where you are currently live doing things instead of pre-recorded.',
        contentid: "streamc",
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
        element.innerHTML = '<h2 id=' + professional[i].titleid + '>' + professional[i].title + '</h2>' +
            '<p id=' + professional[i].datesid + '>' + professional[i].dates + '</p>' +
            '<img src=' + professional[i].image + ' id=' + professional[i].id + '>' +
            '<p id=' + professional[i].contentid + '>' + professional[i].content + '</p>';
        allElements.appendChild(element);

    }
    document.body.appendChild(allElements);

}

document.body.addEventListener('load', initprofessional(), false);