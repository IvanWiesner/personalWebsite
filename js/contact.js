var contactArray = [{
        title: "Cell",
        titleid: "cellt",
        image: "../pics/contact/cell.jpg",
        id: "cell",
        content: '(720) 648-7698',
        contentid: "cellnumber",
    },
    {
        title: "Email",
        titleid: "emailt",
        image: "../pics/contact/mail.jpg",
        id: "email",
        content: 'Ivanwiesner@gmail.com',
        contentid: "emailc",
    },
    {
        title: 'Mailing Adress',
        titleid: "mailt",
        image: "../pics/contact/home.jpg",
        id: "adress",
        content: '103 Summit Way, Erie CO',
        contentid: "mailc",
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
        element.innerHTML = '<h2 id=' + contactArray[i].titleid + '>' + contactArray[i].title + '</h2>' +
            '<img src=' + contactArray[i].image + ' id=' + contactArray[i].id + '>' +
            '<p id=' + contactArray[i].contentid + '>' + contactArray[i].content + '</p>';
        allElements.appendChild(element);
    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initContactPage(), false);