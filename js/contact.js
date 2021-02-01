var contactArray = [
{
    title: "Cell",
    content: '(720) 648-7698',
},
{
    title: "Email",
    content: 'Ivanwiesner@gmail.com',
},
{
    title: 'Mailing Adress',
    content: '103 Summit Way, Erie CO',
}
];

function initContactPage() {

    for (var i = 0; i < contactArray.length; i = i + 1) {

        var element = document.createElement('div');
        element.innerHTML = 
            '<h2>' + contactArray[i].title + '</h2>' +
            '<p>' + contactArray[i].content + '</p>';    

        document.body.appendChild(element);
    }
}

document.body.addEventListener('load', initContactPage(), false);