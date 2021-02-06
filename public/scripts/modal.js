const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const buttonClose = document.querySelector('#modal .header a')

buttonSearch.addEventListener("click", toggleHide)
buttonClose.addEventListener("click", toggleHide)

function toggleHide() {
    modal.classList.toggle("hide")
}
