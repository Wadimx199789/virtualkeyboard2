const nightMode = document.querySelector(".night-mode");
const circle = nightMode.querySelector(".toggle-circle");
const body = document.querySelector("body");
const keyboardButtons = document.querySelectorAll(".keyboard__button");
const keyboard = document.querySelector(".keyboard");
const colorsInput = document.querySelector(".colors__input");
const textField = document.querySelector(".text");
const letters = document.querySelectorAll(".keyboard__button span");
const wrongKeys = ["Shift1", "Shift2", "Control1", "Control2", "Alt1", "Alt2", "Backspace0", "Tab0", "Enter0","CapsLock0","ArrowLeft0","ArrowRight0","ArrowDown0","ArrowUp0"];

nightMode.addEventListener("click", () => {
    nightMode.classList.toggle("active");
    circle.classList.toggle("active");
    body.classList.toggle("active");
    keyboardButtons.forEach((button) => {
        button.classList.toggle("night");
    })
});
keyboard.addEventListener("click",(e)=>{
    if(e.target.classList.contains('keyboard__button-main')){
        textField.value += e.target.innerText
    }
    if(e.target.classList.contains('keyboard__button-backpace')){
        textField.value = textField.value.slice(0, -1)
    }
    if(e.target.classList.contains('keyboard__button-space')){
        textField.value += " "
    }
    if(e.target.classList.contains('keyboard__button-enter')){
        textField.value += "\n"
    }
    console.log(e.target)
    
})
keyboardButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("active");
        setTimeout(() => {
            if (button.classList.contains("active")) {
                button.classList.remove("active");
            }
        }, 300)
    });
    button.addEventListener("mouseup", () => {
        button.classList.remove("active");
    });
});
colorsInput.addEventListener("input", () => {
    keyboard.style.background = colorsInput.value;
});

const keys = {
    CapsLock0: {
        active: false,
    }
}

window.addEventListener('keydown', function (e) {
    let name = e.key + e.location;
    if(name !== 'CapsLock0' ){
        keys[name] = true;
    }
   

    if (keys.Shift1 == true && keys.Alt1 == true) {
        letters.forEach((letter) => {
            if (letter.classList.contains('keyboard__button-main')) {
                letter.classList.remove('keyboard__button-main');
                letter.classList.add('keyboard__button-secondary')
            }
            else if (letter.classList.contains('keyboard__button-secondary')) {
                letter.classList.add('keyboard__button-main');
                letter.classList.remove('keyboard__button-secondary')
            }
        })
    }
});
window.addEventListener('keyup', function (e) {
    let name = e.key+e.location;
    if(name == 'CapsLock0' ){
       keys[name].active = !keys[name].active;
    }
   
    else  keys[name] = false;
    console.log(name);
    
    switch (keys[e.key + e.location]) {
        case false: if (keys.Shift1 == true && keys.CapsLock0.active == false ) { textField.value += e.key.toUpperCase() }
        else if (keys.Shift1 == true && keys.CapsLock0.active == true ) { textField.value += e.key.toLowerCase() }
        else if (wrongKeys.indexOf(name) == -1 && keys.CapsLock0.active == false ) {
            textField.value += e.key.toLowerCase();
        }
        else if (wrongKeys.indexOf(name) == -1 && keys.CapsLock0.active == true) {
            textField.value += e.key.toUpperCase();
        }
        else if (name == "Backspace0") {
            textField.value = textField.value.slice(0, -1)
        }
        else if (name == "Enter0") {
            textField.value += "\n";
        }

            break;
    }




})