
var aboutMe = [
    {
        title: "Ivan Wiesner",
        titleId: "",
        image: "../pics/other/face.jpg id='face' ",
        id: "",
        content: "My name is Ivan Wiesner and I was born and raised in California and moved to Colorado when I was starting highschool. I'm a straightforward individual.",
        contentId: "",
    },
    {
        title: "Video games",
        titleId: "",
        image: "../pics/about/jungle.PNG id='poppy'",
        id: "",
        content: 'The two games I mainly play are League of Legends and Old School Runescape. Yes, the MMORPG that everyone played on Miniclip when they were little is still a game people play today. I run a clan on the old school server version of it and play with buddies of mine and do events and such when I have free time. I have been playing League of Legends since season 3 (2012), my freshman year of highschool. Started playing with my buddy Matthew and then moved onto playing with more friends throughout the years. Even tried to go pro at one point then decided against it later in life. Highest rank has been Diamond 1 and my goal is masters this season.',
        contentId: "",
    },
    {
        title: "Piano",
        titleId: "",
        image: "../pics/about/piano.jpg id='piano'",
        id: "",
        content: 'Played piano when I was little and then moved onto trumpet in grade school through highschool. After highschool I did not really play the trumpet outside of marching band, so I looked for another instrument to play and found myself comming back to the piano. I bought a keyboard and have begun playing again since last year.',
        contentId: "",
    },
    {
        title: "Cooking",
        titleId: "",
        image: "../pics/about/cooking.jpg id='cooking'",
        id: "",
        content: 'Have been cooking food for as long as I can remember with my mother, would always help her out in the kitchen. I even got a job in highschool as a line cook because I thought cooking would be a fun part time job. From there for about a year now every week I splurge at the grocery store and get a full feast to make for my family. I typically make asain food, simply because I enjoy it. I have made homeade ramen, rice balls, curry, katsu, the list goes on. I keep looking for new things to make each week.',
        contentId: "",
    }
];

function initAboutMe() {

    var allElements = document.createElement('div'); // creating html element <div></div>
    allElements.classList.add('Hobbies');           // adding class of 'hobbies' to newley created div
    
    var header = document.createElement('h1');
    header.innerHTML = 'About Ivan';
    header.id = 'about_header';
    allElements.appendChild(header);
    
    for (var i = 0; i < aboutMe.length; i++) {
        
        var element = document.createElement('div');
        element.classList.add('hobbie-element');
        element.innerHTML = "<h2 id='hobbies_title'>" + aboutMe[i].title + "</h2>" +
        '<img src=' + schoolContent[i].image + ' id=' + schoolContent[i].id + '>' + +
        '<p>' + aboutMe[i].content + '</p>';
        allElements.appendChild(element);
        
    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initAboutMe(), false);
