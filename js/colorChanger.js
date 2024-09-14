const root = document.querySelector(':root');
const mode = document.querySelector('#dlMode')
const change = document.querySelector('#dlMode1')
const icon = document.querySelector(".icon");

let Mode = JSON.parse(localStorage.getItem('mode')) || {
    mod : '🌑'
};
change.innerHTML = Mode.mod
modeUpdate()


function modeUpdate() {
    if (change.innerHTML === '🌑') {
        light()  
    }
    else if (change.innerHTML === '☀️') {
        night()
    }
}

function light() {
    /*                         Main Colors                  */
        root.style.setProperty('--clr-background', '#F6F5F2');
        root.style.setProperty('--clr-nav','#F0EBE3')
        root.style.setProperty('--clr-text','black')
        root.style.setProperty('--clr-sub-background','#E2DAD6')
    /*                         Summarys Colors                  */
        root.style.setProperty('--clr-sum-btn','black')
        root.style.setProperty('--clr-sum-bg','#0000001c')
    /*                         Projects Colors                  */
        root.style.setProperty('--clr-pro-bg','#ffffff')
    /*                         icon changer                 */
        change.style.transform = 'translateX(27px)';
        mode.style.backgroundImage = "url('../images/navPics/day.jpg')";
        change.innerHTML = '☀️'
        Mode.mod = '🌑'
        update()
}

function night () {
    /*                         Main Colors                  */
    root.style.setProperty('--clr-background', '#181413');
    root.style.setProperty('--clr-nav','#221a18')
    root.style.setProperty('--clr-text','#DCA26C')
    root.style.setProperty('--clr-sub-background','#141110')
    /*                         Summarys Colors                  */
    root.style.setProperty('--clr-sum-btn','white')
    root.style.setProperty('--clr-sum-bg','#ffffff1c;')
    /*                         Projects Colors                  */
    root.style.setProperty('--clr-pro-bg','#211c1c')
    /*                         icon changer                 */
    change.style.transform = 'translateX(2px)';
    mode.style.backgroundImage = "url('../images/navPics/night.png')";
    change.innerHTML = '🌑'
    Mode.mod = '☀️'
    update()
}
function update() {
    localStorage.setItem('mode', JSON.stringify(Mode))
}

