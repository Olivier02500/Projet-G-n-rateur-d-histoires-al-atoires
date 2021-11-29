
let name = [
    "Romain",
    "Thierry",
    "Luc",
    "Andrew",
    "Paul"
];

let objet = [
    " une tasse",
    " un avion en papier ",
    " un Balais",
    " un vélo",
    " un télèphone"
];

let temperature = [
    " 10°",
    " 20°",
    " 15°",
    " 5°",
    " 0°"
];

let places = [
    " sur la grand place ",
    " chez lui ",
    " au magasin ",
    " au café ",
    " sur un bateau "
];

let verb = [
    "jouer",
    "se promèner",
    "travailler",
    "manger",
    "pêcher",
    "s'entrainer"];

let newName = document.getElementById('name').value;
const addName = document.getElementById('submit');
let div = document.getElementById('histoire');

//ajoute le Prénom dans le tableu 'Name'
addName.addEventListener('click', function (){
    newName = name.push(newName);
});

let story = document.getElementById('new');
story.addEventListener('click', function (){
    div.innerHTML += name[Math.floor(Math.random()*name.length)] + " qui prend "
    + objet[Math.floor(Math.random()*objet.length)] + " dans une journée a "
    + temperature[Math.floor(Math.random()*temperature.length)] + " qui se trouve "
    + places[Math.floor(Math.random()*places.length)] + " pour "
    + verb[Math.floor(Math.random()*verb.length)] + '<br>'
});


