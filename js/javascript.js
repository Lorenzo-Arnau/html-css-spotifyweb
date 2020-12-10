var name=prompt("Il tuo nome?","LORENZO");
var upgrading = document.getElementById("upgrade");
var evidence = document.getElementById("navbar").getElementsByTagName("li")[3];      
var welcome = "PREMIUM,BENTORNATO " + name;
upgrading.innerText = welcome;


if (upgrading.textContent == "PREMIUM,BENTORNATO " + name) {
    evidence.innerText = 'PER '+ name;
}