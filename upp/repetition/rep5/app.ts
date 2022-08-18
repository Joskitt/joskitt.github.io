import { createDialog } from "./components/dialog/dialog";

let openBg = document.querySelector("#openBg");
let openText = document.querySelector("#openText");
let answer = document.querySelector<HTMLElement>("#answer");

const dialog = createDialog(".dialog")

openBg?.addEventListener("click", () => {
    dialog.open(result => {
        document.body.style.backgroundColor = result.submitter!.innerText;
    });
});
openText?.addEventListener("click", () => {
    dialog.open(result => {
        answer?.classList.add("open")
        answer!.style.color = result.submitter!.innerText;
        answer!.innerText = "Du valde: " + result.submitter!.innerText
    });
});

