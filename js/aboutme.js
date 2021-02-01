
var aboutMe = [
    {
        title: "Video games",
        image: "../professional/jungle.PNG",
        content: 'The two games I mainly play are League of Legends and Old School Runescape. Yes the MMORPG that everyone played on Miniclip when they were little is still a game people play today. I run a clan on the old school server version of it and play with buddies of mine and do events and such when I have free time.Been playing since season 3, my freshman year of highschool. Started playing with my buddy Matthew and then moved onto playing with more friends throughout the years. Even tried to go pro at one point then decided against it later in life. Highest rank has been Diamond 1 and my goal is masters this season.',
    },
    {
        title: "Piano",
        image: "",
        content: 'Played piano when I was little and then moved onto trumpet in grade school through highschool. After highschool I did not really play the trumpet outside of marching band, so I looked for another instrument to play and found myself comming back to the piano. I bought a keyboard and have begun playing again since last year.',
    },
    {
        title: "Cooking",
        image: "",
        content: 'Have been cooking food for as long as I can remember with my mother, would always help her out in the kitchen. I even got a job in highschool as a line cook because I thought cooking would be a fun part time job. From there for about a year now every week I splurge at the grocery store and get a full feast to make for my family. I typically make asain food, simply because I enjoy it. I have made homeade ramen, rice balls, curry, katsu, the list goes on. I keep looking for new things to make each week.',
    }
];

function initAboutMe() {

    var allElements = document.createElement('div');
    allElements.classList.add('hobbies');
    
    var header = document.createElement('h3');
    header.innerHTML = 'Hobbies';
    header.id = 'hobbie_header';
    allElements.appendChild(header);
    
    for (var i = 0; i < aboutMe.length; i++) {
        
        var element = document.createElement('div');
        element.classList.add('hobbie-element');
        element.innerHTML = '<h2>' + aboutMe[i].title + '</h2>' +
        '<p>' + aboutMe[i].content + '</p>';
        allElements.appendChild(element);
        
    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initAboutMe(), false);
