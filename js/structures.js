var allWorkContent = [{
        title: 'Banquet Employee',
        dates: 'October 2014 - May 2015',
        description: 'Responsibilities included setting up projectors/ tech equipment, customer service to solve problems, and recruit people to join the staff. Very capable in addressing stressful situations calmly and dealing with difficult customers. Assisted in various tasks in opening for new events, while being collaborative and compatible with many areas including management. Personality was highly effective in increasing sales and customer retention while successfully managing full time schooling hours.',
        img: 'hotel.Png'
    },
    {
        title: 'Line cook',
        dates: 'May 2015 - May 2017',
        description: 'Responsibilities included recruiting and training new employees, closing duties, re-stocking of supplies. Initiated a productive atmosphere in the kitchen - keeping everyone in line and in sequential order. Ticker master/Multi tasker',
        img: 'cook.PNG'
    },
    {
        title: 'Denver Drake Jungler',
        dates: 'May 2017 - October 2018',
        description: 'Joined semi-pro teams for going pro in league of legends, to see what it would be like.',
        img: 'drakes.PNG'
    },
    {
        title: 'Streamer',
        dates: 'January 2019 - October 2020',
        description: 'Streamed part time while I went to school instead of working because it was more enjoyable to do.',
        img: ''
    }
];

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
    }
}

document.body.addEventListener('load', initHead(), false);