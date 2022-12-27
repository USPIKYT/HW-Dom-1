function fontfamily() {
    let element = document.getElementById("MegaPuperBlock3");
    element.style.fontFamily = "Fantasy";
}

function cardBkg() {
    let element = document.getElementById("MegaPuperBlock2").style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

// function textColor() {
//     let element = document.getElementById("MegaPuperBlock1");
//     elem.style.color = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
//     element.style.color = "orange"
// }

function bodyBkg() {
    let element = document.getElementById("PuperBkg");
    element.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}


// function () {
//     let element = document.getElementById("MegaPuperBlock1");
// }

// function getRandom(){
//     return Math.floor(Math.random() * (255 - 0) + 0);
// }

function textColor() {
    let elem = document.getElementById("MegaPuperBlock1");
    elem.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function randomColor(){
    return Math.floor(Math.random() * 500);
} 

function bdRadius() {
    let elem = document.getElementById("MegaPuperBlock4");
    elem.style.borderRadius = "100px";
}