const numOfElems = 15
const fotos = Array(numOfElems).fill("https://picsum.photos/id/");
const titles = Array(numOfElems).fill("Заголовок фото #");

function displayAlbum(columns){
    var Item = document.getElementsByClassName('album-container')[0];
    var htmlBuffer = ''
    for (var i=0; i<numOfElems/columns; i++){
        htmlBuffer+='<div class="album-row">';
        for (let j=0; j<columns; j++){
            let index = i*columns+j+1;
            htmlBuffer+='<div class="album-col">';
            htmlBuffer+=`<img class="image" src="${fotos[--index]+getRandomIntInclusive(1,100).toString()+'/500/300'}" alt="${titles[i]+index.toString()+" - alt"}" title="${titles[i]+index.toString()}" class="image" />`;
            htmlBuffer+=`<p>${titles[i]+index.toString()}</p>`;
            htmlBuffer+='</div>';
        }
        htmlBuffer+='</div>';
    }
    Item.innerHTML = htmlBuffer;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//task 5
function applyZoomingToAlbum() {
    displayAlbum(5)
    const img__content = document.querySelectorAll(".image");
    const img__open = document.querySelector(".big-image");
    const img__background = document.querySelector(".image-background");
  
    img__content.forEach((img, i) => {
      img.addEventListener("click", (e) => {
        img__open.style.display = "block";
        img__background.style.display = "block";
        let srcData = e.target.getAttribute("src");
        img__open.innerHTML = "";
        let buf = `
          <img title ="Photo# ${i}" src=${srcData}>`;
          img__open.insertAdjacentHTML("beforeend", buf);
        });
    });
  
    img__background.addEventListener("click", () => {
      img__open.style.display = "none";
      img__background.style.display = "none";
    });
  }
// task 5