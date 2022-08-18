let btn = document.getElementById("btn");
let postContainer = document.querySelector(".postContainer");
btn?.addEventListener("click", getPosts);
function getPosts() {
    for(let i = 1; i < 101; i++){
        let postContent = document.createElement("div");
        let a = document.createElement("a");
        postContainer?.appendChild(postContent);
        postContent?.appendChild(a);
        a.href = "https://jsonplaceholder.typicode.com/posts/" + [
            i
        ];
        fetch("https://jsonplaceholder.typicode.com/posts/" + [
            i
        ]).then((response)=>response.json()).then((json)=>a.innerHTML = json.title).then((json)=>console.log(json));
    }
}

//# sourceMappingURL=index.6b86260e.js.map
