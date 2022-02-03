const btn = document.getElementById("share-btn");
const shareOpt = document.getElementById("share");
btn.addEventListener("click", () => {
    return shareOpt.classList.toggle("show");
});
