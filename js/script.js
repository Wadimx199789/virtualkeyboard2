const nightMode = document.querySelector(".night-mode");
const circle = nightMode.querySelector(".toggle-circle");
const body = document.querySelector("body");
const keyboardButtons = document.querySelectorAll(".keyboard__button");
const keyboard = document.querySelector(".keyboard");
const colorsInput = document.querySelector(".colors__input");

nightMode.addEventListener("click",()=>{
    nightMode.classList.toggle("active");
    circle.classList.toggle("active");
    body.classList.toggle("active");
    keyboardButtons.forEach((button)=>{
        button.classList.toggle("night");
    })
});

keyboardButtons.forEach((button)=>{
    button.addEventListener("mousedown",()=>{
        button.classList.add("active");
        setTimeout(()=>{
            if(button.classList.contains("active")){
                button.classList.remove("active");
            }
        },1000)
    });
    button.addEventListener("mouseup",()=>{
        button.classList.remove("active");
    });
});
colorsInput.addEventListener("input", () => {
    // for (let i = 0; i < keys.length; i++) {
    //     keys[i].style.color = colorsInput.value;
    // }
    keyboard.style.background = colorsInput.value;
});