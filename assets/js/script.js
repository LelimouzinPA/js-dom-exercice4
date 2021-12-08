document.getElementById("imgVVG").addEventListener("click", openOnImageClick)
document.getElementById("imgVVG").addEventListener("mouseover", zoom)

function openOnImageClick() {
    document.getElementById("imgVVG").setAttribute("src", "../exercice4/assets/img/4.2_Van-Gogh.jpg");
}

function zoom() { document.getElementById("imgVVG").setAttribute('style', 'width: 100%') }