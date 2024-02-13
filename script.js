let card = document.querySelectorAll(".flip-card");
let belakang = document.querySelectorAll(".flip-card-inner");

card.forEach((e, i) => {
    e.addEventListener("mouseover", function () {
        belakang[i].style.transform = 'rotateY(180deg)';
    });
})