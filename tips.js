let icon = [
    //"Mouse",
    //"<img src=\"Images/mouse.png\">",
    "Mouse",
    "CPS+",
    "Sketch.exe",
    "Saving"
]

let image = [
    "images/mouse.png",
    "images/cpsmore.png",
    "images/sketchy.png",
    "images/save.png"
]


let quotes = [
    "How did you cheat a CPS test, but need to buy a auto clicker?",
    "What sketchy things is up today?",
    "Do you realy need a second mouse?",
    "Don't press the shift key after clicking the button...",
    "Do you have a save button? if not, buy one >:)"
]

if (upgrades[0] == true & (upgrades[1] == true)) {
    let button = document.getElementById("button");
    button.innerHTML = quotes[randRange(quotes.length, 0)]
}

// Image Format
// <img src=\"Images/${image}\">

let name = [
    "A Second mouse",
    "Extra cps on click test",
    "Autoclicker Program off e-bay",
    "The save button"
];

let tip = [
    "Now you can click twice as fast!... if you have 2 fingers",
    "A quick and dirty way to cheat",
    "It's quite sketchy, but was only 5 bucks",
    "Now you can less parranoid, You can save manualy now!"
];

let tipTitle = document.getElementById("tipTitle")
let tipBody = document.getElementById("tipBody")
let tipFull = document.getElementById("tipContent")
let tipCost = document.getElementById("cost")
let upgradeList = document.getElementById("upgrades")
//let saveButton = document.getElementById("save")

if (!upgrades[3]) {
    saveButton.hidden = true
}

tipFull.hidden = true

elements = document.getElementsByClassName("upgrade");
console.log(elements);

function toolTip(e) {
    element = e.target;
    tipFull.hidden = false;
    id = Number(element.id)-1

    tipBody.innerHTML = tip[id]
    tipTitle.innerHTML = name[id]
    if (upgrades[id]) {
        tipCost.innerHTML = "Cost: <i>Bought<i\\>"
    } else {
        tipCost.innerHTML = "Cost: " + String(cost[id])
    };
}

function hide() {
    tipFull.hidden = true;
    tipCost.innerHTML = "Cost:"
}

function click(e) {
    element = e.target;
    buy(Number(element.id))
}

/*for (let i = 0; i < elements.length; i++) {
    element = elements[i];
    console.log(element);
    element.addEventListener("mouseover", toolTip);
    element.addEventListener("mouseout", hide);
    element.addEventListener("click", click);
    element.innerHTML = icon[i]
}*/


for (let i = 0; i < icon.length; i++) {
    let upgrade;
    if (image[i] != undefined) {
        upgrade = document.createElement("img")
        upgrade.src = image[i]
    } else {
        upgrade = document.createElement("button")
        upgrade.innerHTML = icon[i]
    }
    upgrade.addEventListener("mouseover", toolTip);
    upgrade.addEventListener("mouseout", hide);
    upgrade.addEventListener("click", click);

    upgrade.id = i+1;
    upgrade.className = "upgrade"
    upgradeList.append(upgrade)
}


console.log(canSave)
