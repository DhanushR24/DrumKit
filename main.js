var numberOfBtns = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfBtns; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", (e) => {

        var btnStyle = e.target.value;
        sound(btnStyle);
        animation(btnStyle);
    })
}

document.addEventListener("keypress", (e) => {

    sound(e.key);
    animation(e.key);
})

function sound(key) {
    switch (key) {
        case "w":
            var wSound = new Audio("./sounds/tom-1.mp3");
            wSound.play();
            break;
        case "a":
            var wSound = new Audio("./sounds/tom-2.mp3");
            wSound.play();
            break;
        case "s":
            var wSound = new Audio("./sounds/tom-3.mp3");
            wSound.play();
            break;
        case "d":
            var wSound = new Audio("./sounds/tom-4.mp3");
            wSound.play();
            break;
        case "j":
            var wSound = new Audio("./sounds/snare.mp3");
            wSound.play();
            break;
        case "k":
            var wSound = new Audio("./sounds/crash.mp3");
            wSound.play();
            break;
        case "l":
            var wSound = new Audio("./sounds/kick-bass.mp3");
            wSound.play();
            break;
    }
}

function animation(key) {
    var cur = document.querySelector("." + key)
    cur.classList.add("animation");

    setTimeout(() => {
        cur.classList.remove("animation");
    }, 250);
}