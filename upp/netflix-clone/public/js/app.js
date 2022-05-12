let questions = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".answer");

function collapseAll() {
    for(let i = 0; i < questions.length; i++) {
        questions[i].classList.remove("showing")
        answer[i].classList.remove("visible")
    }
}

for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", function(){
        collapseAll();
        questions[i].classList.add("showing")
        answer[i].classList.add("visible")
    })
}
