let pointsGuest = document.getElementById("points-guest")
let pointsHome = document.getElementById("points-home")
let newPointsHome = 0
let newPointsGuest = 0

function add1PointHome() {
    newPointsHome += 1
    pointsHome.textContent = newPointsHome
}

function add2PointHome() {
    newPointsHome += 2
    pointsHome.textContent = newPointsHome
}

function add3PointHome() {
    newPointsHome += 3
    pointsHome.textContent = newPointsHome
}


function add1PointGuest() {
    newPointsGuest += 1
    pointsGuest.textContent =  newPointsGuest
}

function add2PointGuest() {
    newPointsGuest += 2
    pointsGuest.textContent = newPointsGuest
}

function add3PointGuest() {
    newPointsGuest += 3
    pointsGuest.textContent = newPointsGuest
}

function newGame() {
    newPointsHome = 0
    newPointsGuest = 0

    pointsHome.textContent = newPointsHome
    pointsGuest.textContent = newPointsGuest
}