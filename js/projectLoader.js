const load = document.querySelector("#ProjectsPage");
const btn = document.querySelector("#loadBtn");
const newbtn = document.querySelector('#load')
const before = load.innerHTML
const project_info = [{
    proName: "To Do list",
    proImage: "../images/navPics/day.jpg",
    proDesc: "to do list",
    link: '../HTML/ToDoList.html',
    item1: '' ,
    item2: '' ,
    item3: '' ,
    item4: '' ,
    dir: 'ltr',
    btn: 'try Demo!'
  } ]

function wait(lang) {
  btn.setAttribute("class","loadBtn")
  setTimeout(function(){
  loading(lang)
},900
)
}

function loading (lang){
    for (let index = 0; index < project_info.length; index++) {
        load.innerHTML += 
        `<div class="contanor" dir="${project_info[index].dir}">
          <div class="projects">

            <div class="project_pic">
              <div class="project_img">
                <a href="${project_info[index].link}"><img src="${project_info[index].proImage}" alt=""></a>
              </div>
              <div class="used_lang">
                <div id="WhatUsed"><p>Used : </p></div>
                <div class="langUsed"><img src="${project_info[index].item1}" alt=""></div>
                <div class="langUsed"><img src="${project_info[index].item2}" alt=""></div>
                <div class="langUsed"><img src="${project_info[index].item3}" alt=""></div>
                <div class="langUsed"><img src="${project_info[index].item4}" alt=""></div>
              </div>
            </div>

            <div class="project_info">
              <div class="project_name">
                <h3>${project_info[index].proName}</h3>
              </div>
              <div class="project_desc">
                <p>${project_info[index].proDesc}</p>
              </div>
              <div class="project_btn">
                <a href="">${project_info[index].btn}</a>
              </div>
            </div>

          </div>
        </div>`; 
    }
    if (lang == 'en') {
      newbtn.innerHTML = `<a id="proBtn" href="../HTML/Project Page-en.html">More Projects ></a>`;
    } else {
      newbtn.innerHTML = `<a id="proBtn" href="../HTML/Project Page-ar.html">More Projects ></a>`;
    }
}
