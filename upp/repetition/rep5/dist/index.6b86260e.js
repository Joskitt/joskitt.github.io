let openBg = document.querySelector("#openBg");
let openText = document.querySelector("#openText");
let answer = document.querySelector("#answer");
const dialog = createDialog(".dialog");
openBg?.addEventListener("click", ()=>{
    dialog.open((result)=>{
        document.body.style.backgroundColor = result.submitter.innerText;
    });
});
openText?.addEventListener("click", ()=>{
    dialog.open((result)=>{
        answer?.classList.add("open");
        answer.style.color = result.submitter.innerText;
        answer.innerText = "Du valde: " + result.submitter.innerText;
    });
});
function createDialog(selector) {
    const element = document.querySelector(selector);
    const open = (submitCallback)=>{
        element?.classList.add("open");
        const submit = (e)=>{
            e.preventDefault();
            element?.removeEventListener("submit", submit);
            submitCallback(e);
            element?.classList.remove("open");
        };
        element?.addEventListener("submit", submit);
    };
    return {
        open
    };
}

//# sourceMappingURL=index.6b86260e.js.map
