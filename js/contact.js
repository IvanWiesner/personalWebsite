var contactArray = [{
        title: "Cell",
        titleId: "cellt",
        image: "../pics/contact/cell.jpg",
        id: "cell",
        content: '(720) 648-7698',
        contentId: "cellnumber",
    },
    {
        title: "Email",
        titleId: "emailt",
        image: "../pics/contact/mail.jpg",
        id: "email",
        content: 'Ivanwiesner@gmail.com',
        contentId: "emailc",
    },
    {
        title: 'Mailing Adress',
        titleId: "mailt",
        image: "../pics/contact/home.jpg",
        id: "adress",
        content: '103 Summit Way, Erie CO',
        contentId: "mailc",
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
        element.innerHTML = '<h2 id=' + contactArray[i].id + '>' + contactArray[i].title + '</h2>' +
            '<img src=' + contactArray[i].image + ' id=' + contactArray[i].id + '>' +
            '<p id=' + contactArray[i].id + '>' + contactArray[i].content + '</p>';
        allElements.appendChild(element);
    }
    document.body.appendChild(allElements);
}

document.body.addEventListener('load', initContactPage(), false);