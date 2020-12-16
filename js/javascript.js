var name = prompt("Bentornato su Spotify..Qual'è il tuo nome?","");
var upgrading = document.getElementById("upgrade");
var createFor = document.getElementById("create-for");
var sideName = document.getElementById("side-name");
var evidence = document.getElementById("navbar").getElementsByTagName("li")[3];


alert("Bentornato " + name + " è bello rivederti!");
if (name !== "") {
    var welcome = "PREMIUM,BENTORNATO " + name;
    upgrading.innerText = welcome;
    evidence.innerText = 'PER '+ name;
    createFor.innerText = 'Creato per '+ name;
    sideName.innerText = name;
};
 var playClick = document.getElementById('play');
 var playBar = document.getElementById('playBar');
 var imgCover = document.getElementsByClassName('little-cover')[0];
 var songName = document.getElementsByClassName('title-song')[0];

 playClick.addEventListener('click',
   function() {
     playBar.innerHTML = '<audio src="audio/ACDC.mp3" type="audio/mpeg" class="song" autoplay controls>';
     imgCover.innerHTML = '<img src="img/acdc.jpg" alt="">';
     songName.innerHTML = '<h3 class="colored-white bl-strong">Ac-Dc</h3>' + '<h4 class="colored-dark-grey bl-strong">Shot in the dark<br class="phone-specs"> 2020</h4>';
   }
 );
