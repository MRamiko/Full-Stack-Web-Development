// const change_btn = document.querySelector("#change-btn");
// const reset_btn = document.querySelector("#reset-btn");

const open_btn = document.querySelector("#open-btn");
const small_window = document.querySelector("#small-window");
const cancel_btn = document.querySelector("#cancel-btn");

// console.log(change_btn, reset_btn);

open_btn.addEventListener("click", () => {
    small_window.style.display = "block";
});

cancel_btn.addEventListener("click", () => {
    small_window.style.display = "none";
});

// window.addEventListener("scroll", () => {
//     document.body.style.backgroundColor = "blue";
//     document.body.style.color = "white";
//     document.body.style.fontSize = "30px";
// })

