
let local = ".";
let sever = "Blog"
fetch(local + "/json/data.json")
    .then(response => { return response.json(); })
    .then(jsondata => callingFunction(jsondata))
    .catch(error => console.log(error));;


const callingFunction = (data) => {
    aboutContentDisplay(data.about);
    portforlioContentDisplay(data.portfolio);
    skillContentDisplay(data.skill);
}


const aboutContentDisplay = (about) => {
    var { main_txt, career, project } = about;
    var mainTxt = main_txt.map(about => about.text).join(" ");
    var careerTxt = career.map(career => `<li><span>${career.date}</span> <span>${career.title}</span></li>`).join(" ");
    var projectTxt = project.map(project => `<li><span>${project.date}</span> <span>${project.title}</span></li>`).join(" ");

    var about = document.getElementById("about_content_box");
    about.innerHTML = `

    <div class="main_txt" id="main_txt" data-aos=\"fade-up\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"600\">
        ${mainTxt}
    </div>
    <div>
        <div class="career" data-aos=\"fade-up\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"1600\">
            <div >
                <p>ACTIVITY</p>
                <div class="circle_title">
                    <p>경력 &</p>
                    <p>자격증</p>
                </div>
        
            </div>
            <ul>
                ${careerTxt}
            </ul>
        </div>
        <div class="project" data-aos=\"fade-up\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"1600\">
            <div >
                <p>ACTIVITY</p>
                <div class=" hexagon">
                    <p>경력 &<br/>
                    자격증</p>
                </div>
            </div>
            <ul>
                ${projectTxt}
            </ul>
        </div>
        </div>
    `;
}


const portforlioContentDisplay = (portfolio) => {
    var { thumbnail, detail } = portfolio;
    var thumbnailImg = thumbnail.map((thumb, idx) => `<li key=${idx} class='${thumb.language}'><img src="${local}/img/port${thumb.id}.PNG"><div><p>${thumb.title}</p><div><button onClick="detailPage(${thumb.id})">Detail</button><a href="${thumb.site}" target="blank"><button>Site</button></a></div></div></li>`).join(" ");
    var portfolio = document.getElementById("work_content");
    portfolio.innerHTML = thumbnailImg;
}




const skillContentDisplay = (skill) => {
    var { skills, study, good, greate } = skill;
    var skill_type_items = document.getElementById("skill_type_items");


    var study = study.map((study, idx) => `<li key=${idx} ><img src="${local}/img/${study.name}.png"/><div><span class='study' style='width:${study.percent}%;'>${study.name}</span></div></li>`).join(" ");
    var good = good.map((good, idx) => `<li  key=${idx} ><img src="${local}/img/${good.name}.png"/><div><span class='good' style='width:${good.percent}%' >${good.name}</span></div></li>`).join(" ");
    var greate = greate.map((great, idx) => `<li  key=${idx} ><img src="${local}/img/${great.name}.png"/><div><span style='width:${great.percent}%' class='great'>${great.name}</span></div></li>`).join(" ");


    var skills_img = skills.map((skill) => `<li><img src="${local}/img/${skill}.png"/></li>`).join(" ");
    var skill_box = document.getElementById("skill_box");
    skill_type_items.innerHTML = skills_img;
    skill_box.innerHTML = `

        <ul data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000"  data-aos-anchor-placement="top-center">
            ${greate}
         
        </ul> 
        <ul data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000"  data-aos-anchor-placement="top-center">
        ${good}
        ${study}
        </ul>

        `
}



function dataLoad() { // 반환값을 받을 Promise 객체 생성
    return new Promise(function (receive) {
        fetch(local + "/json/data.json")
            .then(function (response) { return response.json(); })
            .then(function (data) { receive(data); });
    });
} (async function () {
    //  함수를 호출해 then이 실행된 값을 받는다.
    jsonData = await dataLoad();
})();


const detailPage = (idVal) => {
    dataLoad();
    let detail_page = document.getElementById("detail_page");
    detail_page.style = 'display:flex';
    let detail_page_con = jsonData.portfolio.detail.filter(detail => idVal == detail.id);
    let { id, title, description, detail_of_function, skill, site } = detail_page_con[0];
    let description_map = description.map(des => `<p>${des}</p>`).join(" ");
    let detail_of_function_map = detail_of_function.map(detail => `<li>${detail}</li>`).join(" ");
    let skill_map = skill.map(skill => `<li><img src='${local}/${skill}.png'/><p>${skill}</p></li>`).join(" ");
    detail_page.innerHTML = `
                    <div>
                    <div class="detail_title">
                        <h1>${title}</h1>
                        ${description_map}
                    </div>
                    <div class="detail_of_function">
                        <ul class='detail_of_function_item'>
                            ${detail_of_function_map}
                        </ul>
                        <ul class='detail_of_function_img'>
                            ${skill_map}
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="monitor_box" style='background-image:url("${local}/img/port${id}.PNG")'>
                        <div>
                            <div class="close_button" onClick="detail_page_close()">close</div>
                            <div class="site_button">
                                 <a href="${site}" target='blank'>
                                    <p>View</p>
                                    <p>Site</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}

const detail_page_close = () => {
    let detail_page = document.getElementById("detail_page");
    detail_page.style = 'display:none';
}


const portfolio_tap_menu = (tab) => {
    dataLoad();
    let portfolio = document.getElementById("work_content");
    let { thumbnail } = jsonData.portfolio;
    let tabmenu = thumbnail.filter(thumb => thumb.language == tab).map((thumb, idx) => `<li key=${idx} class='${thumb.language}'><img src="${local}/img/port${thumb.id}.PNG"><div><p>${thumb.title}</p><div><button onClick="detailPage(${thumb.id})">Detail</button><a href="${thumb.site}" target="blank"><button>Site</button></a></div></div></li>`).join(" ");
    let tabmenu_all = thumbnail.map((thumb, idx) => `<li key=${idx} class='${thumb.language}'><img src="${local}/img/port${thumb.id}.PNG"><div><p>${thumb.title}</p><div><button onClick="detailPage(${thumb.id})">Detail</button><a href="${thumb.site}" target="blank"><button>Site</button></a></div></div></li>`).join(" ");
    portfolio.innerHTML = tab == 'all' ? tabmenu_all : tabmenu;



    // 탭메뉴 스타일 변경
    var i, tab_menu_item, active_tab;
    tab_menu_item = document.getElementsByClassName("tab_menu_item");
    for (var i = 0; i < tab_menu_item.length; i++) {
        tab_menu_item[i].classList.remove("active");
    }
    active_tab = 0;
    switch (tab) {
        case "all": active_tab = 0; break;
        case "js": active_tab = 1; break;
        case "react": active_tab = 2; break;
        default: active_tab = 3; break;
    }
    tab_menu_item[active_tab].classList.add("active");
}




const nav_menu_func = (menu) => {

    let i, menu_item;
    menu_item = document.getElementsByClassName("menu_item");
    for (i = 0; i < menu_item.length; i++) {
        menu_item[i].classList.remove("xi-tint");
        menu_item[i].classList.add("xi-tint-o");
    }

    menu_item[menu].classList.remove("xi-tint-o");
    menu_item[menu].classList.add("xi-tint");

}



// 스크롤

var nav = document.getElementById("nav");
window.addEventListener('scroll', e => {
    //스크롤 움직였을때 원하는 기능 삽입
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scrollPosition < 800 || scrollPosition > 2800 ? nav.style = 'opacity:0' : nav.style = 'opacity:1';
});


const reg_exp_func = (name, value) => {
    var nameReg = /^[가-힣]{2,4}$/;//한글 이름만
    // 이메일
    var emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var regCheck;
    // 핸드폰/일반 전화
    var phoneReg = /^\d{3}[- ]?\d{3,4}[- ]?\d{4}$/;
    var telphoneReg = /^\d{2,3}[- ]?\d{3,4}[- ]?\d{4}$/;
    if (value == '') return;
    switch (name) {
        case "name": regCheck = nameReg.test(value); break;
        case "phone": regCheck = phoneReg.test(value) && telphoneReg.test(value); break;
        case "email": regCheck = emailExp.test(value); break;
        default: regCheck = true;
    }
    if (regCheck == false)
        alert(name + "형식이 올바르지 않습니다.")
    return regCheck;

}

// email
const email_send = () => {

    let name = document.getElementsByName('name')[0].value;
    let phone = document.getElementsByName('phone')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let message = document.getElementsByName('message')[0].value;
    if (name == '' || email == '' || message == '' || message.length <= 0) {
        alert("폼을 전부 입력한 뒤 버튼을 눌러주세요!");
        return;
    }
    else if (!reg_exp_func('name', name) || !reg_exp_func('phone', phone) || !reg_exp_func('email', email))
        return;

    document.getElementById("submit").style = 'display:none';
    document.getElementById("submit_dummy").style = 'display:block';
    var templateParams = {
        name: name,
        phone: phone,
        email: email,
        message: message
    };


    emailjs.send('service_a3xda0c', 'template_jkmkane', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("메일이 보내졌습니다. 감사합니다!");
        }, function (error) {
            console.log('FAILED...', error);
        });

}











