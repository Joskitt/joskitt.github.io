let div = document.querySelector<HTMLElement>(".container");

div?.addEventListener("click", changeBg);

div?.classList.add("white");

function changeBg() {
    if(div?.classList.contains("white")) {
        div.classList.remove("white");
        div.classList.add("black");
    } else if (div?.classList.contains("black")) {
        div.classList.remove("black");
        div.classList.add("red");
    } else if (div?.classList.contains("red")) {
        div.classList.remove("red");
        div.classList.add("green");
    } else if (div?.classList.contains("green")) {
        div.classList.remove("green");
        div.classList.add("blue");
    } else if (div?.classList.contains("blue")) {
        div.classList.remove("blue");
        div.classList.add("white");
    }
};