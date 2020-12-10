var name = prompt("Il tuo nome?","");
var upgrading = document.getElementById("upgrade");
var createFor = document.getElementById("create-for");
var sideName = document.getElementById("side-name");
var evidence = document.getElementById("navbar").getElementsByTagName("li")[3];
var welcome = "PREMIUM,BENTORNATO " + name;
upgrading.innerText = welcome;


if (upgrading.textContent == "PREMIUM,BENTORNATO " + name) {
    evidence.innerText = 'PER '+ name;
    createFor.innerText = 'Creato per '+ name;
    sideName.innerText = name;
}
