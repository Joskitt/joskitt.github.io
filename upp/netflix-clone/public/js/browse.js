const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

pic1.addEventListener("click", getSource1);
pic2.addEventListener("click", getSource2);
pic3.addEventListener("click", getSource3);
pic4.addEventListener("click", getSource4);

function getSource1() {
    localStorage.setItem("source", img1.src)
}
function getSource2() {
    localStorage.setItem("source", img2.src)
}
function getSource3() {
    localStorage.setItem("source", img3.src)
}
function getSource4() {
    localStorage.setItem("source", img4.src)
}