const $hamburger = document.querySelector(".hamburger"),
    $nav = document.querySelector(".nav");

function toggleHamburger(node, element) {
    document.addEventListener("click", (e) => {
        if (e.target === node) {
            node.classList.toggle("is-active");
            element.classList.toggle("hide");
        }
    });
}

toggleHamburger($hamburger, $nav);
