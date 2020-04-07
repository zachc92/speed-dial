const list = document.querySelector('#links-list');

const linksList = [
    {
        "img": "https://dmszsuqyoe6y6.cloudfront.net/img/ff/favicon.png",
        "title": "FFLogs",
        "desc": "Elia Aximand",
        "url": "https://www.fflogs.com/character/na/faerie/elia%20aximand"
    },
    {
        "img": "https://dmszsuqyoe6y6.cloudfront.net/img/ff/favicon.png",
        "title": "FFLogs",
        "desc": "Paisley Park",
        "url": "https://www.fflogs.com/character/na/faerie/paisley%20park"
    },
    {
        "img": "https://www.pngkey.com/png/full/3-32240_logo-youtube-png-transparent-background-youtube-icon.png",
        "title": "Youtube",
        "desc": "",
        "url": "https://www.youtube.com"
    },
    {
        "img": "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png",
        "title": "Twitch",
        "desc": "",
        "url": "https://www.twitch.tv/zeck___"
    },
    {
        "img": "https://cdn.freebiesupply.com/logos/large/2x/udemy-1-logo-png-transparent.png",
        "title": "Udemy",
        "desc": "",
        "url": "https://www.udemy.com/home/my-courses/learning/"
    },
    {
        "img": "https://www.pngkey.com/png/full/303-3036579_free-code-camp-logo-transparent.png",
        "title": "FCC",
        "desc": "",
        "url": "https://www.freecodecamp.org/learn/"
    },
    {
        "img": "https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/GitHub-512.png",
        "title": "GitHub",
        "desc": "",
        "url": "https://github.com/ze-ck"
    },
    {
        "img": "https://www.stickpng.com/assets/images/5ae6cd086554160a79be9f44.png",
        "title": "Daily Schedule",
        "desc": "",
        "url": "https://docs.google.com/spreadsheets/d/1hheHbreftI7lYA5MMBoMZtA3TyohM7GaaY8xn9d6uTY/edit#gid=0"
    }
];

const renderList = item => {
    let day;
    let month;
    switch(new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2: 
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    switch(new Date().getMonth()) {
        case 0:
          month="January";
          break;
        case 1:
          month="February";
          break;
        case 2:
          month="March";
          break;
        case 3:
          month="April";
          break;
        case 4:
          month="May";
          break;
        case 5:
          month="June";
          break;
        case 6:
          month="July";
          break;
        case 7:
          month="August";
          break;
        case 8:
          month="September";
          break;
        case 9:
          month="October";
          break;
        case 10:
          month="November";
          break;
        case 11:
          month="December";
    }
    let dateMarkup = `
    <div class="row text-light mt-3 rounded">
        <h5 class="display-3">${day}, ${month} ${new Date().getDate()}</h5>
    </div>
    `;
    list.insertAdjacentHTML('afterbegin', dateMarkup);

    linksList.forEach((el) => {
        let markup =
        `
        <div class="row text-light mt-3 rounded align-items-center list-items">
            <div class="col-1" id="icon">
                <a href="${el.url}"><img src="${el.img}" alt="" class="mx-3 mt-3 mb-3"></a>
            </div>
            <div class="col-3" icon="title">
                <h3>${el.title}</h3>
            </div>
        `;
        // <div class="col-8" id="desc">
        //     <h3>${el.desc}</h3>
        // </div>
        list.insertAdjacentHTML('beforeend', markup);
    })

    
}

renderList();