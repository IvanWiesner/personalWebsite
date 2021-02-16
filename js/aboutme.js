var bioArray = [{
    title: "Ivan Wiesner",
    image: "../pics/other/face.jpg",
    content: "The youngest of 4, born and raised in Southern California,\
        CEO father of a telematics company and a teacher mother.\
        Have lived in Colorado for 10 years - in both Westminster and Erie. \
        Personality and attributes - I'm a straightforward individual with a no \
        nonsense personality and tons of character. Here are some of my hobbies."
}];

function bio() {

    var allElements = document.createElement('div');
    allElements.classList.add('bio');

    for (var i = 0; i < bioArray.length; i++) {

        var bioContent = document.createElement('div');
        bioContent.classList.add('biocontentbox');
        bioContent.innerHTML = '<h2>' + bioArray[i].title + '</h2>' +
        `<img src="${bioArray[i].image}"/>` +
            '<p>' + bioArray[i].content + '</p>';

        allElements.appendChild(bioContent);
    };

    document.body.appendChild(allElements);
}

document.body.addEventListener('load', bio());

var aboutMeArray = [{
        title: "Video games",
        content: 'The two games I mainly play are League of Legends and Old School Runescape. Yes, the MMORPG that everyone played on Miniclip when they were little is still a game people play today. Have been playing since 2006. \
        I run a clan on the Old School server version of it and play with buddies of mine and do events and more when I have free time. I have been playing League of Legends since Season 3 (2012), \
        my freshman year of high school. Started playing with my buddy, Matthew, and then moved on to playing with more friends throughout the years. Even tried to go pro at one point then decided against it later in life. \
        Highest rank has been Diamond 1 and my goal is Masters this season.',
    },
    {
        title: "Piano",
        content: 'Have a history of musical skills and is a personal focus. Played piano when I was little and then moved on to trumpet in grade school through high school. Marching Band and concert performances for 8 years. \
        After high school I did not really play the trumpet outside of marching band, so I looked for another instrument to play and found myself comming back to the piano. \
        I bought a keyboard and have begun playing again since last year.',
    },
    {
        title: "Cooking",
        content: 'Have been cooking food for as long as I can remember with my mother, would always help her out in the kitchen. \
        I even got a job in high school as a line cook because I thought cooking would be a fun part time job. \
        From there for about a year now every week I splurge at the grocery store and create a full feast to make for my family. \
        I typically make Asian food, simply because I enjoy it. I have made homemade ramen, rice balls, curry, katsu, the list goes on. \
        I keep looking for new things to make each week.',
    }
];

function aboutMe() {

    var allElements = document.createElement('div');
    allElements.classList.add('hobbies');

    for (var i = 0; i < aboutMeArray.length; i++) {

        var text = document.createElement('div');
        text.classList.add('contentbox');
        text.innerHTML = '<h2>' + aboutMeArray[i].title + '</h2>' +
            '<p>' + aboutMeArray[i].content + '</p>';

        allElements.appendChild(text);
    };

    document.body.appendChild(allElements);
}

document.body.addEventListener('load', aboutMe());

var contactArray = [{
    header: "Contact Info",
    content: 'Cell-(720)648-7698',
},
{
    header: "",
    content: 'Email-Ivanwiesner@gmail.com',
},
{
    header: "",
    content: 'Mailing Adress-103 Summit Way, Erie CO  80516',
}
];

function contact() {

var allElements = document.createElement('div');
allElements.classList.add('contact');

for (var i = 0; i < contactArray.length; i++) {

    var info = document.createElement('div');
    info.classList.add('contactbox');
    info.innerHTML = '<h1>' + contactArray[i].header + '</h1>' +
    '<p>' + contactArray[i].content + '</p>';
    allElements.appendChild(info);
    };

document.body.appendChild(allElements);
}

document.body.addEventListener('load', contact());

