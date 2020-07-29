const out = document.querySelector(".umwickeln")
document.querySelector("button").addEventListener("click", numberMe)
let count = 0
function numberMe() {
    let round = document.createElement("p")
    let roundText = document.createTextNode(`${count}`)
    round.appendChild(roundText)
    round.className = "weiss"
    out.appendChild(round)
    count++
    for (let i = count; i < count + 9; i++) {
        let square = document.createElement("p")
        let squareText = document.createTextNode(`${i}`)
        square.appendChild(squareText)
        square.className = "rechteck"
        out.appendChild(square)
    }
    count += 9
}