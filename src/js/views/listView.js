import { elements } from "./base"

export const renderList = item => {
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
    elements.list.insertAdjacentHTML('afterbegin', dateMarkup);

    item.forEach((el) => {
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
        elements.list.insertAdjacentHTML('beforeend', markup);
    })

    
}