const countPhotos = 15;
const col = 5;

const photos =
    [
        `https://picsum.photos/id/10/500/500`,
        `https://picsum.photos/id/20/500/500`,
        `https://picsum.photos/id/30/500/500`,
        `https://picsum.photos/id/40/500/500`,
        `https://picsum.photos/id/50/500/500`,
        `https://picsum.photos/id/60/500/500`,
        `https://picsum.photos/id/506/500/50`,
        `https://picsum.photos/id/70/500/500`,
        `https://picsum.photos/id/80/500/500`,
        `https://picsum.photos/id/90/500/500`,
        `https://picsum.photos/id/100/500/500`,
        `https://picsum.photos/id/110/500/500`,
        `https://picsum.photos/id/120/500/500`,
        `https://picsum.photos/id/130/500/500`,
        `https://picsum.photos/id/140/500/500`
    ]
    const titles =
    [
        'Заголовок фото #1',
        'Заголовок фото #2',
        'Заголовок фото #3',
        'Заголовок фото #4',
        'Заголовок фото #5',
        'Заголовок фото #6',
        'Заголовок фото #7',
        'Заголовок фото #8',
        'Заголовок фото #9',
        'Заголовок фото #10',
        'Заголовок фото #11',
        'Заголовок фото #12',
        'Заголовок фото #13',
        'Заголовок фото #14',
        'Заголовок фото #15'
    ]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPhotos()
{
  for (let i = 0; i < countPhotos; i++) {
    if (i % col == 0)
    {
        let row_div = document.createElement("div");
        row_div.className = "album-row";
        document
          .getElementsByClassName("album-container")[0]
          .appendChild(row_div)
    }
    let div = document.createElement("div");
    div.className = "album-col";
    let image = document.createElement("img");
    image.src = photos[i];
    image.className = "image";
    image.setAttribute("data-enlargeable", null);
    image.title = titles[i]
    image.alt = titles[i]
    let imageName = document.createElement("p");
    imageName.className = "centered"
    imageName.textContent = titles[i];
    
    document
      .getElementsByClassName("album-row")[Math.floor(i/col)]
      .appendChild(div)
      .append(image, imageName);
  }
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

function imageSlider(){
  $("img[data-enlargeable]")
    .addClass("img-enlargeable ")
    .click(function () {
      let src = $(this).attr("src");
      let modal;
      modal = $("<div>")
        .addClass("active")
        .css({
          background: "RGBA(0,0,0,.5) url(" + src + ") no-repeat center",
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: "10000",
          top: "0",
          left: "0",
        })
        .attr("path", src)
        .appendTo(".album-container");

      let currentPhotoInSliderStart = photos.indexOf( $(".active").attr("path"))+1;
      $(".active").append($("<div>", { class: "right" })
      .css({
          position: "fixed",
          top: "645px",
          right: `${50+1920/4}px`,
              color: "white"
      }));

      $(".active").append($("<div>", { class: "left"})
      .css({
          position: "fixed",
          top: "645px",
          left: `${50+1920/4}px`,
          color: "white"
      }));

      $(".active").append($("<div>", { class: "imgInfo", text: "Фото "+ currentPhotoInSliderStart +" из "+ countPhotos })
        .css({
            position: "fixed",
            top: "748px",
            left: `${1920/2}px`, 
            color : "white"
      }));

      $(".active").append($("<div>", { class: "close", text: "Close" })
        .css({
            position: "fixed",
            top: "148px",
            right: "500px", 
            color: "white"
      }));

      $(".close").click(function () {
        modal.remove();
      });

      $(".right").on("click", function () {
        let currentImage = $(".active");
        let currentPhotoInSlider = photos.indexOf(currentImage.attr("path"));
        const newPhoto =
          photos[
            currentPhotoInSlider < photos.length - 1
              ? (currentPhotoInSlider+1)
              : 0
          ];
        currentImage.css(
          "background",
          `RGBA(0,0,0,.5) url("${newPhoto}") no-repeat center`
        );
        currentImage.attr("title",titles[currentImage]);
        currentImage.fadeOut(400, function(){
                currentImage.attr("path", newPhoto);
                currentImage.attr("title",titles[currentImage]);
                currentPhotoInSlider < photos.length-1
              ? document.getElementsByClassName("imgInfo")[0].innerHTML = "Фото " + (currentPhotoInSlider+2) + " из 15"
              : document.getElementsByClassName("imgInfo")[0].innerHTML = "Фото " +  1 + " из 15";
            currentImage.fadeIn(400);
        });
      });

      $(".left").on("click", function () {
        let currentImage = $(".active");
        let currentPhotoInSlider = photos.indexOf(currentImage.attr("path"));
        const newPhoto =
          photos[
            currentPhotoInSlider > 0
              ? (currentPhotoInSlider-1)
              : photos.length - 1
          ];
        currentImage.css(
          "background",
          `RGBA(0,0,0,.5) url("${newPhoto}") no-repeat center`
        );
        currentImage.fadeOut(400, function(){
                currentImage.attr("path", newPhoto);
                currentPhotoInSlider > 0
              ? document.getElementsByClassName("imgInfo")[0].innerHTML = "Фото " + currentPhotoInSlider + " из 15"
              : document.getElementsByClassName("imgInfo")[0].innerHTML = "Фото " + photos.length + " из 15";
            currentImage.fadeIn(400);
        });
      });
    });
}