let submit = document.getElementById("submit");
let num = document.getElementsByClassName("getDiv");
let etapes = document.getElementsByClassName("etapes");
let li = document.getElementsByClassName("li");
let back = document.getElementById("back");
let liste = document.getElementById("ol");
let p = document.getElementById("p");
let t = ["Choose title", "Choose description", "Confirm data"];
p.textContent = t[0] + " " + "content";

let counter = 1;

submit.addEventListener("click", () => {
    etapes[counter].style.color = "black";
    num[counter].classList.add("liDiv");
    num[counter].classList.remove("num");
    p.textContent = t[counter] + " " + "content";
    if (counter < 2) {
        counter ++;
    }
    console.log("SUBMIT" + " " + num[counter]);
});

back.addEventListener("click", () => {
    etapes[counter].style.color = "#808080";
    num[counter].classList.remove("liDiv");
    num[counter].classList.add("num");
    p.textContent = t[counter -1] + " " + "content";
    if (counter > 1) {
        counter --;
    }
});

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", () => {
        etapes[counter].style.color = "black";
        num[counter].classList.add("liDiv");
        num[counter].classList.remove("num");
        p.textContent = t[counter] + " " + "content";
        if (counter < 2) {
            counter ++;
        }
    });
}