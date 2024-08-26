const searchBarContainerEL = document.querySelector(".searchBarContainer")
const magnifierEL = document.querySelector(".magnifier")

magnifierEL.addEventListener("click" , ()=>{
    searchBarContainerEL.classList.toggle("active")
})