// let player = {
//     ad: "",
//     xp: 0,
//     level: 0
// }

// let f = prompt("daxil et")
// function Xp(point) {
//     if (f == point) {
//         let g = Math.round(Math.random() * 50)
//         console.log(player.xp += g);

//     }
// }
// Xp("point")


// let player = {
//     name: "Player",
//     xp: 0,
//     level: 1
// }

// function addXP() {
//     let point = prompt("Daxil et")

//     if (point === "point") {
//         let randomXP = Math.floor(Math.random() * 50) + 1
//         player.xp += randomXP

//         console.log(randomXP + " XP qazandın!")
//     }
// }

// function checkLevel() {
//     if (player.xp >= 40) {
//         player.level++
//         player.xp = 0

//         console.log("Level artdı!")
//     }

//     if (player.level === 5) {
//         console.log("Mənim Rise of Kingdom-da 80 milyon gücüm var!")
//     }
// }

// function showPlayer() {
//     console.log("Ad:", player.name)
//     console.log("XP:", player.xp)
//     console.log("Level:", player.level)
// }

// addXP()
// checkLevel()
// showPlayer()

let students = ["Kazım", "Murad", "Aysel", "Tural", "Nigar"]


function selectWinner() {

    let randomIndex = Math.round(Math.random() * students.length)
    let winner = students[randomIndex]

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    let randomColor = `rgb(${r}, ${g}, ${b})`

    let winnerElement = document.getElementById("winner")

    winnerElement.innerText = "🏆 Qalib: " + winner
    winnerElement.style.color = randomColor
}


// let x=[5,6,2]

// for(let y in x){
//     console.log(y);
    
// }
