var contactArray = [
{
    title: "Cell",
    titleId: "",
    image: "../pics/contact/cell.jpg id='cell' ",
    id: "",
    content: '(720) 648-7698',
},
{
    title: "Email",
    titleId: "",
    image: "../pics/contact/mail.jpg id='email' ",
    id: "",
    content: 'Ivanwiesner@gmail.com',
},
{
    title: 'Mailing Adress',
    titleId: "",
    image: "../pics/contact/home.jpg id='adress' ",
    id: "",
    content: '103 Summit Way, Erie CO',
}
];

function initContactPage() {

    var allElements = document.createElement('div');
    allElements.classList.add('contactiInfo');
    
    var header = document.createElement('h1');
    header.innerHTML = 'Contact Info';
    header.id = 'contact-Info';
    allElements.appendChild(header);

    for (var i = 0; i < contactArray.length; i++) {

        var element = document.createElement('div');
        element.classList.add('contact-Info');
        element.innerHTML = '<h2>' + contactArray[i].title + '</h2>' +
        '<img src=' + schoolContent[i].image + ' id=' + schoolContent[i].id + '>' + +
            '<p>' + contactArray[i].content + '</p>';    
            allElements.appendChild(element);
    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initContactPage(), false);