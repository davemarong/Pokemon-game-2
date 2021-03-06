let tyranitar = {
  Type: {Type1: "Dark", Type2: "Rock"}, 
  Pokedex: "#248",
  Legendary: "No",
  EvStages: "3",
  WhichStage: "Stage 3/3",
  FirstStage: "Larvitar",
  SecondStage: "Pupitar",
  Colors: {Primary:"Green", Secondary: "Blue/Black"},
  Generation: "2",
  Category: "Armor pokemon",
}
let gyrados = {
  Type: {Type1: "Water", Type2: "Flying"},
  Pokedex: "#130",
  Legendary: "No",
  EvStages: "2",
  WhichStage: "Stage 2/2",
  FirstStage: "Magikarp",
  Colors: {Primary:"Blue", Secondary: "Tan/White"},
  Generation: "1",
  Category: "Atrocious pokemon",
}
let kadabra = {
  Type: "Psychic",
  Pokedex: "#064",
  Legendary: "No",
  EvStages: "3",
  WhichStage: "Stage 2/3",
  FirstStage: "Abra",
  ThirdStage: "Alakazam",
  Colors: {Primary:"Yellow", Secondary: "Brown"},
  Generation: "1",
  Category: "Psi pokemon",
}
let volcarona = {
  Type: {Type1: "Fire", Type2: "Bug"},
  Pokedex: "#637",
  Legendary: "No",
  EvStages: "2",
  WhichStage: "Stage 2/2",
  FirstStage: "Larvesta",
  Colors: {Primary:"Red", Secondary: "Black/White"},
  Generation: "5",
  Category: "Sun pokemon",
}
let lugia = {
  Type: {Type1: "Flying", Type2: "Psychic"},
  Pokedex: "#249",
  Legendary: "Yes",
  EvStages: "1",
  Colors: {Primary:"Silver", Secondary: "Lightblue/blue"},
  Generation: "2",
  Category: "Diving pokemon",
}
let chandelure = {
  Type: {Type1: "Ghost", Type2: "Fire"},
  Pokedex: "#609",
  Legendary: "No",
  EvStages: "3",
  WhichStage: "Stage 3\3",
  FirstStage: "Litwick",
  SecondStage: "Lampent",
  Colors: {Primary:"Purple", Secondary: "Black"},
  Generation: "5",
  Category: "Luring pokemon",
}

let gamesPlayed = 0
let hintCounter = 0
let userGuess = 0

let resetBtn = document.querySelector("#resetBtn")
let hintCount = document.querySelector("#hintCount")

let type1 = document.querySelector("#type1")
let type2 = document.querySelector("#type2")
let pokedex = document.querySelector("#pokedex")
let legendary = document.querySelector("#legendary")
let evStages = document.querySelector("#evStages")
let whichStage = document.querySelector("#whichStage")
//let firstStage = document.querySelector("#firstStage")
//let secondStage = document.querySelector("#secondStage")
//let thirdStage = document.querySelector("#thirdStage")
let priColor = document.querySelector("#priColor")
let secColor = document.querySelector("#secColor")
let generation = document.querySelector("#generation")
let category = document.querySelector("#category")

let game1 = document.querySelector("#game1") 
let game2 = document.querySelector("#game2")
let game3 = document.querySelector("#game3")
let game4 = document.querySelector("#game4")
let game5 = document.querySelector("#game5")
let game6 = document.querySelector("#game6")


function resetGame(){
  let allHints = document.querySelectorAll(".hint")
  hintCounter = 0
  hintCount.textContent = ""
  allHints.forEach(function(allHints){
    allHints.textContent = "?"
  })
  addGame()
  
}    

function removeGame(){
  game1.removeEventListener("click", game1fun)
  game2.removeEventListener("click", game2fun)
  game3.removeEventListener("click", game3fun)
  game4.removeEventListener("click", game4fun)
  game5.removeEventListener("click", game5fun)
  game6.removeEventListener("click", game6fun)
}

function playGame (pokemon){
  type1.addEventListener("click", function type1Fun(){
    type1.textContent = pokemon.Type.Type1
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    type1.removeEventListener("click", type1Fun)
  })
  type2.addEventListener("click", function type2Fun(){
    type2.textContent = pokemon.Type.Type2
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    type2.removeEventListener("click", type2Fun)
  })
  pokedex.addEventListener("click", function pokedexFun(){
    pokedex.textContent = pokemon.Pokedex
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    pokedex.removeEventListener("click", pokedexFun)
})
  legendary.addEventListener("click", function legendaryFun(){
    legendary.textContent = pokemon.Legendary
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    legendary.removeEventListener("click", legendaryFun)
  })
  evStages.addEventListener("click", function evStagesFun(){
    evStages.textContent = pokemon.EvStages
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    evStages.removeEventListener("click", evStagesFun)
  })
  whichStage.addEventListener("click", function whichStageFun(){
    whichStage.textContent = pokemon.WhichStage
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    whichStage.removeEventListener("click", whichStageFun)
  })
  //firstStage.addEventListener("click", function(){
    //firstStage.textContent = pokemon.FirstStage})
  //secondStage.addEventListener("click", function(){
  //  secondStage.textContent = pokemon.SecondStage})
  //thirdStage.addEventListener("click", function(){
  //  thirdStage.textContent = pokemon.ThirdStage })
  priColor.addEventListener("click", function priColorFun(){
    priColor.textContent = pokemon.Colors.Primary
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    priColor.removeEventListener("click", priColorFun)
  })
  secColor.addEventListener("click", function secColorFun(){
    secColor.textContent = pokemon.Colors.Secondary
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    secColor.removeEventListener("click", secColorFun)
  })
  generation.addEventListener("click", function generationFun(){
    generation.textContent = pokemon.Generation
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    generation.removeEventListener("click", generationFun)
  })
  category.addEventListener("click", function categoryFun(){
    category.textContent = pokemon.Category
    hintCounter++
    hintCount.textContent = "Hints used: " + hintCounter
    category.removeEventListener("click", categoryFun)
  })
}

function game1fun(){
  playGame(tyranitar)
  removeGame()
}
function game2fun(){
  playGame(gyrados)
  removeGame()
}
function game3fun(){
  playGame(kadabra)
  removeGame()
}
function game4fun(){
  playGame(volcarona)
  removeGame()
}
function game5fun(){
  playGame(lugia)
  removeGame()
}
function game6fun(){
  playGame(chandelure)
  removeGame()
}

function addGame (){
  game1.addEventListener("click", game1fun)
  game2.addEventListener("click", game2fun)
  game3.addEventListener("click", game3fun)
  game4.addEventListener("click", game4fun)
  game5.addEventListener("click", game5fun)
  game6.addEventListener("click", game6fun)
}

addGame()

resetBtn.addEventListener("click", resetGame)

