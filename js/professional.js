var professionalArray = [{
        title: 'Banquet Employee',
        dates: 'October 2014 - May 2015',
        image: "pics/professional/hotel.PNG",
        content: 'Responsibilities included setting up projectors/tech equipment, customer service to solve problems, and recruited people to join the staff. At peak, had recruited 100% of staff for hotel event setup functions. \
        Very capable in addressing stressful situations calmly and dealing with difficult customers. Assisted in various tasks in opening for new events, \
        while being collaborative and compatible in many areas including working with management. Personality was highly effective in increasing sales and customer retention while successfully managing full time schooling hours.',
    },
    {
        title: 'Line cook',
        dates: 'May 2015 - May 2017',
        image: "pics/professional/cook.PNG",
        content: 'Responsibilities included recruiting and training new employees - at peak recruited 20% of staff, closing duties, re-stocking of supplies. Initiated a productive atmosphere in the kitchen - keeping everyone in line and in sequential order. Ticket master/Multi tasker - given added responsibliites and duties \
        on a regular basis - was a natural trusted leader',
    },
    {
        title: 'Denver Drakes - Jungler',
        dates: 'May 2017 - October 2018',
        image: "pics/professional/drakes.PNG",
        content: 'Joined semi-pro teams for going pro in League of Legends, in quest of being challenged and advancing in lifelong gaming focus. \
        On the highest rank of this team "A" team. Consistent and reliable gamer and multi-tasker.   \
        Eventually moved on to other ventures.',
    },
    {
        title: 'Streamer',
        dates: 'January 2019 - October 2020',
        image: "pics/professional/stream.jpg",
        content: 'Streamed part-time while atending college as a part-time job. \
        Highly ranked - in the top one percentile within the pool \
        of millions of players. AKA being Diamond 1 and above in League of Legends. Also in the top 1000 for players on Old School Runescape. \
        Streamed on Twitch and gained a small following.',
    }
];

function initprofessional() {
    var allElements = document.createElement('div');
    allElements.classList.add('professional-content');

    for (var i = 0; i < professionalArray.length; i++) {

        var profDiv = document.createElement('div');
        profDiv.classList.add('prof-content');

        var imgDiv = document.createElement('div');
        imgDiv.classList.add('prof-left');
        imgDiv.innerHTML = `<img src="${professionalArray[i].image}">`;

        var titleDiv = document.createElement('div');
        titleDiv.classList.add('prof-right');
        titleDiv.innerHTML = '<h2>' + professionalArray[i].title + '</h2>' +
            '<p>' + professionalArray[i].dates + '</p>' +
            '<p>' + professionalArray[i].content + '</p>';
        
        profDiv.appendChild(imgDiv);
        profDiv.appendChild(titleDiv);

        allElements.appendChild(profDiv);
    }
    document.body.appendChild(allElements);
}
document.body.addEventListener('load', initprofessional(), false);
