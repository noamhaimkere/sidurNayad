let container = document.getElementById("container")
let player = document.getElementById("player")

let sumElement = document.getElementById("sum")
let sum = 0

let topp = 0
let left = 0

document.addEventListener("keydown", checkKey)

function checkKey(info) {
    if (info.key == "w" || info.key == "W") {
        topp = topp - 20
    }

    if (info.key == "s" || info.key == "S") {
        topp = topp + 20
    }

    if (info.key == "d" || info.key == "D") {
        left = left + 20
    }

    if (info.key == "a" || info.key == "A") {
        left = left - 20
    }


    player.style.top = topp + "px"
    player.style.left = left + "px"

    let foods = document.getElementsByClassName("food")

    for (let i = 0; i < foods.length; i++) {
        if (elementsOverlap(player, foods[i])) {
            sum += Number(foods[i].innerHTML)
            sumElement.innerHTML = sum
            foods[i].remove()
        }
    }

    if (sum == 20) {
        alert("You won!!!!!!!!!!!!!!!!!!!!!!!! 😎😎😎😎")
        window.location.reload()
    }

    else if (sum > 20) {
        alert("You lost :-(")
        window.location.reload()
    }


}

for (let i = 1; i < 10; i++) {
    container.innerHTML += `
        <div class="food" style="top: ${randomInteger(0, 95)}%; left: ${randomInteger(0, 95)}%"> ${i} </div>
    `
}


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}
