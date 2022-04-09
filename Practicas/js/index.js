const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-cards").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [{
            title: "Tecnología",
            img: "https://placeimg.com/250/250/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/250/250/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/250/250/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/250/250/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/250/250/nature",
        },
    ];

cardContent.forEach(element => {
    let $clone = document.importNode($template, true);
    
    $clone.querySelector('figure').classList.add("card");
    $clone.querySelector('img').setAttribute("src", element.img);
    $clone.querySelector('img').setAttribute("alt", element.title);
    $clone.querySelector('figcaption').textContent = element.title;

    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

