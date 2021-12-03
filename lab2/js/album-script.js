const numOfElems = 15
const fotos = Array(numOfElems).fill("img/1.jpg");
const titles = Array(numOfElems).fill("Заголовок фото #");

function displayAlbum(columns){
    var Item = document.getElementsByClassName('album-container')[0];
    var htmlBuffer = ''
    for (var i=0; i<numOfElems/columns; i++){
        htmlBuffer+='<div class="album-row">';
        for (let j=0; j<columns; j++){
            let index = i*columns+j+1;
            htmlBuffer+='<div class="album-col">';
            htmlBuffer+=`<img src="${fotos[i]}" alt="${titles[i]+index.toString()+" - alt"}" title="${titles[i]+index.toString()}" class="image" />`;
            htmlBuffer+=`<p>${titles[i]+index.toString()}</p>`;
            htmlBuffer+='</div>';
        }
        htmlBuffer+='</div>';
    }
    Item.innerHTML = htmlBuffer;
}