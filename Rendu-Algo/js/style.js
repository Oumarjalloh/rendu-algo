// // // int
// // let age = 21;
// // //big int
// // let etoile = 10000000000000n;
// // //float
// // let price = 19.99;
// // //string
// // let name = "Oumar";
// // //boolean
// // let faceId = true;
// // // array
// // const nains = ["simplet", "dormeur", "grincheux", faceID];
// // // object
// // let article = {
// //     name: "Rasoir",
// //     price:2
// // }
// // // null
// // let Oumar = null;

// let number1 = 2
// let number2 = 5

// if(number1 == 5 || number2 ==){
//     console.log("okay");
// }else{
//     console.log("nope");
// }

// let a = 5;
// switch(a) {
//     case 1:
//     console.log('egale à 1');
//     break
//     case 5:
//     console.log('egale à 5');
//     break  
//     default:
//         console.log('default');
// }
 
// let a = "Jean"
// let b = "Paul"
// let result = checkNames(a,b)

// function checkNames(nom1, nom2){
//     return nom1 == nom2
// }
// let animals = ['cat', 'dog','bird']

// animals.forEach(function(animal){
//   console.log(animal)
// })


           // EXERCICE CLASS

// class Pokemon {
// constructor(name, attack, defense, hp, luck) {
//     this.name = name
//     this.attack = attack
//     this.defense = defense
//     this.hp = hp
//     this.luck = luck
// }

// isLucky() {
//     return this.luck > Math.random()
// }

// attackPokemon(pokemon) {
//     if(pokemon.isLucky()) {
//     console.log(pokemon.name + ' a évité l\'attaque')
//     } else {
//     let damages = this.attack - pokemon.defense
//     pokemon.hp -= damages
//     console.log(this.name + ' a attaqué ' + pokemon.name + ' et lui a infligé ' + damages + '. Il lui reste ' + pokemon.hp + ' hp')
//     }
// }
// }

// let pokemon1 = new Pokemon('Tortank', 10, 7, 100, 0.3)
// let pokemon2 = new Pokemon('Mewtwo', 12, 3, 100, 0.5)

// while(pokemon1.hp > 0 && pokemon2.hp > 0) {
// pokemon1.attackPokemon(pokemon2)

// if(pokemon2.hp <= 0) {
//     console.log(pokemon2.name + ' est mort')
//     break
// }

// pokemon2.attackPokemon(pokemon1)

// if(pokemon1.hp <= 0) {
//     console.log(pokemon1.name + ' est mort')
// }
// }


// fIN DE L'EXO




// DEBUT DE L'EXERCICE "Le taxi"

let personne = {
    nom: "john",
    sante: 10,
}

const musiques = [
    "Anissa - Wejdene", 
    "Gims", 
    "Cj", 
    "Lemar", 
    "Pop",
];

let trajet = {
    radio: musiques[0],
    redLights: 30,
    taxis : 0,
}

//musiques[chiffre()]
//musiques[0]

function chiffre (){
    return parseInt( Math.random() * (5 - 0) + 0)
}
console.log('Nom de la musique    ' + musiques[chiffre()])

function takeTaxi(personne, trajet){
    while(trajet.redLights > 0){
        if(chiffre() == 0) {
            personne.sante--;
            trajet.taxi++;
            console.log('il reste' + trajet.redLights)
        }
    }
};


