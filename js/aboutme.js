var aboutMe = [{
        title: "Ivan Wiesner",
        titleid: "ivant",
        image: "../pics/other/face.jpg",
        id: "face",
        content: "The youngest of 4, born and raised in Southern California, CEO father of a telematics company and a teacher mother. Have lived in Colorado for 10 years - in both Westminster and Erie.  Personality and attributes - I'm a straightforward individual with a no nonsense personality and tons of character.",
        contentid: "ivanc",
    },
    {
        title: "Video games",
        titleid: "videot",
        image: "../pics/about/jungle.PNG",
        id: "poppy",
        content: 'The two games I mainly play are League of Legends and Old School Runescape. Yes, the MMORPG that everyone played on Miniclip when they were little is still a game people play today. Have been playing since 2006. \
        I run a clan on the Old School server version of it and play with buddies of mine and do events and more when I have free time. I have been playing League of Legends since Season 3 (2012), \
        my freshman year of high school. Started playing with my buddy, Matthew, and then moved on to playing with more friends throughout the years. Even tried to go pro at one point then decided against it later in life. \
        Highest rank has been Diamond 1 and my goal is Masters this season.',
        contentid: "viedoc",
    },
    {
        title: "Piano",
        titleid: "pianot",
        image: "../pics/about/piano.jpg",
        id: "piano",
        content: 'Have a history of musical skills and is a personal focus. Played piano when I was little and then moved on to trumpet in grade school through high school. Marching Band and concert performances for 8 years. \
        After high school I did not really play the trumpet outside of marching band, so I looked for another instrument to play and found myself comming back to the piano. \
        I bought a keyboard and have begun playing again since last year.',
        contentid: "pianoc",
    },
    {
        title: "Cooking",
        titleid: "cookingt",
        image: "../pics/about/cooking.jpg",
        id: "cooking",
        content: 'Have been cooking food for as long as I can remember with my mother, would always help her out in the kitchen. \
        I even got a job in high school as a line cook because I thought cooking would be a fun part time job. \
        From there for about a year now every week I splurge at the grocery store and create a full feast to make for my family. \
        I typically make Asian food, simply because I enjoy it. I have made homemade ramen, rice balls, curry, katsu, the list goes on. \
        I keep looking for new things to make each week.',
        contentid: "cookingc",
    }
];

function initAboutMe() {

    var allElements = document.createElement('div'); // creating html element <div></div>
    allElements.classList.add('Hobbies'); // adding class of 'hobbies' to newley created div

    var header = document.createElement('h1');
    header.innerHTML = 'About Me';
    header.id = 'about_header';
    allElements.appendChild(header);

    for (var i = 0; i < aboutMe.length; i++) {

        var element = document.createElement('div');
        element.classList.add('hobbie-element');
        element.innerHTML = '<h2 id=' + aboutMe[i].titleid + '>' + aboutMe[i].title + '</h2>' +
            '<img src=' + aboutMe[i].image + ' id=' + aboutMe[i].id + '>' +
            '<p id=' + aboutMe[i].contentid + '>' + aboutMe[i].content + '</p>';
        allElements.appendChild(element);

    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initAboutMe(), false);