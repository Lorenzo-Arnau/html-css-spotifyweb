var name = prompt("Bentornato su Spotify..Qual'è il tuo nome?","");
var upgrading = document.getElementById("upgrade");
var createFor = document.getElementById("create-for");
var sideName = document.getElementById("side-name");
var evidence = document.getElementById("navbar").getElementsByTagName("li")[3];


alert("Bentornato " + name + " è bello rivederti!");
if (name != "") {
    var welcome = "PREMIUM,BENTORNATO " + name;
    upgrading.innerText = welcome;
    evidence.innerText = 'PER '+ name;
    createFor.innerText = 'Creato per '+ name;
    sideName.innerText = name;
};
