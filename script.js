function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}
var typed = new Typed(".mov", {
    strings: [, "Rasanya Dingin", "Rasanya Adem", "Rasanya Seger", "Rasanya Sejuk", "Rasanya Wenak Pokoke Ya"],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true

});
var typedX = new Typed('.text', {
    strings: [, 'Website Masih dalam pengembangan :]'],
    typeSpeed: 30,
    loop: false,
    showCursor: false
});