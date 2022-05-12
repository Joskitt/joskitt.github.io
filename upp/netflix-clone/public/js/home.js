let posterContainer1 = document.querySelector(".posterContainer1")
let posterContainer2 = document.querySelector(".posterContainer2")
let profilePicture = document.getElementById("profilePicture")

createImagePoster(posterContainer1, 350)
createImagePoster(posterContainer1, 120)
createImagePoster(posterContainer1, 330)
createImagePoster(posterContainer1, 335)
createImagePoster(posterContainer1, 344)
createImagePoster(posterContainer1, 345)

createImagePoster(posterContainer2, 250)
createImagePoster(posterContainer2, 220)
createImagePoster(posterContainer2, 234)
createImagePoster(posterContainer2, 235)
createImagePoster(posterContainer2, 244)
createImagePoster(posterContainer2, 245)

let source = localStorage.getItem("source");

profilePicture.src = source;
console.log(source);

function createImagePoster(parentElement, movieNum) {
    const element = document.createElement('div');
    element.classList.add('posterComponent');
    parentElement.append(element);

    let img = 0;
 

    const render = () => {
        element.innerHTML = `
        <img class="poster" src="${ img }">
        `;
    }

    const load = async () => {
        isLoading = true;
        const res = await fetch('https://api.themoviedb.org/3/movie/' + movieNum + '?api_key=83de9848527348056ff4733daeb9eb06')

        const data = await res.json();

        img = "https://image.tmdb.org/t/p/original/" + data.backdrop_path;

        render();
    }

    load();
    render();
}