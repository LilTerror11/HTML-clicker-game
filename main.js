// HCL

let clicks = 0;
let canSave = false;

let clickValue = 0;

let clickPerSecond = 0;
let clickPerClick = 1;

let clickElement;
let cpsElement;
let mainLoop;

let counterFormat = `Clicks: `;
let cpsFormat = `Clicks Per Second: `;

// setInterval is in milliseconds
let interval = 1;
let intervalMultiplier = 60*1000;  // Minutes


let ids = ["moreMouse", "cpsCheat", "sketch.exe"]
let upgrades = [false, false, false]
let cost = [100, 50, 200]

function randRange(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}

function setup() {
    clickElement = document.getElementById("clicks");
    cpsElement = document.getElementById("cps");
    if (typeof(Storage) !== "undefined") {
        canSave = true;
        if (localStorage.HtmlClickerGame_clickcount) {
            clicks = Number(localStorage.HtmlClickerGame_clickcount);
        } else {
            localStorage.HtmlClickerGame_clickcount = 0;
        };
        if (localStorage.HtmlClickerGame_clicksPerSecond) {
            clickPerSecond = Number(localStorage.HtmlClickerGame_clicksPerSecond);
        } else {
            localStorage.HtmlClickerGame_clicksPerSecond = 0;
        };
        if (localStorage.HtmlClickerGame_clicksPerSecond) {
            clickPerSecond = Number(localStorage.HtmlClickerGame_clicksPerSecond);
        } else {
            localStorage.HtmlClickerGame_clicksPerSecond = 0;
        };
        if (localStorage.HtmlClickerGame_clicksPerClick) {
            clickPerClick = Number(localStorage.HtmlClickerGame_clicksPerClick);
        } else {
            localStorage.HtmlClickerGame_clicksPerClick = 1;
        };
        if (localStorage.HtmlClickerGame_upgrades) {
            upgrades = JSON.parse(localStorage.HtmlClickerGame_upgrades);
        } else {
            localStorage.HtmlClickerGame_upgrades = JSON.stringify(upgrades);
        };
        updateCount();
        loops();
    } else {
        //document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        alert("Sorry, your progress will not save, as your browser does not support seb storage...");
    }
    //setuped = true;
}

function onClick() {
    clicks += clickPerClick;
    updateCount();
}

function updateCount() {
    //if (setuped == true) {
    //    clickElement.innerHTML = counterFormat + clicks;
    //}
    clickElement.innerHTML = counterFormat + Math.round(clicks);
    cpsElement.innerHTML = cpsFormat + Math.round(clickPerSecond*10)/10;
    //save();
}

function save() {
    if (canSave) {
        if (localStorage.HtmlClickerGame_clickcount) {
            localStorage.HtmlClickerGame_clickcount = clicks;
            localStorage.HtmlClickerGame_clicksPerSecond = clickPerSecond;
            localStorage.HtmlClickerGame_clicksPerClick = clickPerClick;
            localStorage.HtmlClickerGame_upgrades = JSON.stringify(upgrades);
        }
    };
    console.log("saving");
}

function loops() {
    mainLoop = setInterval(function() {
        save();
    }, interval*intervalMultiplier)

    clicksSecond = setInterval(function() {
        clicks += clickPerSecond/1000;
        updateCount();
    }, 1)
}

let bought = false

function got() {
    bought = true;
}

function buy(id) {
    let i = id - 1
    bought = false;
    if (cost[i] <= clicks) {
        if (!upgrades[i]){
            if (id == 1) {
                clickPerClick += 2;
                got();
            } else if (id == 2) {
                clickPerClick += 1;
                got();
            } else if (id == 3) {
                clickPerSecond += 1;
                got();
            }
        }
    }
    if (bought) {
        clicks -= cost[i];
        upgrades[i] = true;
    }
}
