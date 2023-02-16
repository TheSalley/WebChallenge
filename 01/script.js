const el = document.querySelector(".container");

el.addEventListener("click", function(e) {
    Array.prototype.forEach.call(this.children, (item) => {
        item.classList.remove("active");
    })
    e.target.classList.add("active");
})