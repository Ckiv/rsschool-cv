document.querySelector (".trigger").onclick = function() {
    open()
};

function open() {
    document.querySelector(".menu-list").classList.toggle("show");
}