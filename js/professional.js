var professional = [{
        title: 'Banquet Employee',
        titleid: "banquet",
        dates: 'October 2014 - May 2015',
        datesid: "banqp",
        image: "../pics/professional/hotel.PNG",
        id: "hotel",
        content: 'Responsibilities included setting up projectors/tech equipment, customer service to solve problems, and recruited people to join the staff. At peak, had recruited 100% of staff for hotel event setup functions. \
        Very capable in addressing stressful situations calmly and dealing with difficult customers. Assisted in various tasks in opening for new events, \
        while being collaborative and compatible in many areas including working with management. Personality was highly effective in increasing sales and customer retention while successfully managing full time schooling hours.',
        contentid: "banqc",
    },
    {
        title: 'Line cook',
        titleid: "line",
        dates: 'May 2015 - May 2017',
        datesid: "cookp",
        image: "../pics/professional/cook.PNG",
        id: "cook",
        content: 'Responsibilities included recruiting and training new employees - at peak recruited 20% of staff, closing duties, re-stocking of supplies. Initiated a productive atmosphere in the kitchen - keeping everyone in line and in sequential order. Ticket master/Multi tasker - given added responsibliites and duties \
        on a regular basis - was a natural trusted leader',
        contentid: "cookc",
    },
    {
        title: 'Denver Drake Jungler',
        titleid: "denver",
        dates: 'May 2017 - October 2018',
        datesid: "denverp",
        image: "../pics/professional/drakes.PNG",
        id: "drake",
        content: 'Joined semi-pro teams for going pro in League of Legends, in quest of being challenged and advancing in lifelong gaming focus. \
        On the highest rank of this team "A" team. Consistent and reliable gamer and multi-tasker.   \
        Eventually moved on to other ventures.',
        contentid: "denverc",
    },
    {
        title: 'Streamer',
        titleid: "streamer",
        dates: 'January 2019 - October 2020',
        datesid: "streamp",
        image: "../pics/professional/stream.PNG",
        id: "stream",
        content: 'Streamed part-time while atending college as a part-time job. Highly ranked - in the top one percentile within the pool of millions of players.\
        Streamed on Twitch and gained a small following.',
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