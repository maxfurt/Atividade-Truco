window.onload=()=>{
    "use strick"
    if ("ServiceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js")
    }
}


const PontoAElement = document.getElementById("PontoA");
const PontoBElement = document.getElementById("PontoB");
const TimeAName = document.getElementById("TimeA");
const TimeBName = document.getElementById("TimeB");

let PontoA = 0;
let PontoB = 0;

document.getElementById("TimeAUmPonto").addEventListener("click", () => updateScore("A", 1));
document.getElementById("TimeATresPonto").addEventListener("click", () => updateScore("A", 3));
document.getElementById("TimeASeisPonto").addEventListener("click", () => updateScore("A", 6));
document.getElementById("TimeADozePonto").addEventListener("click", () => updateScore("A", 12));
document.getElementById("TimeBUmPonto").addEventListener("click", () => updateScore("B", 1));
document.getElementById("TimeBTresPonto").addEventListener("click", () => updateScore("B", 3));
document.getElementById("TimeBSeisPonto").addEventListener("click", () => updateScore("B", 6));
document.getElementById("TimeBDozePonto").addEventListener("click", () => updateScore("B", 12));
document.getElementById("reset").addEventListener("click", resetScores);

function updateScore(team, points) {
    if (team === "A") {
        PontoA += points;
        PontoAElement.textContent = PontoA;
    } else if (team === "B") {
        PontoB += points;
        PontoBElement.textContent = PontoB;
    }

    checkWinner();
}

function resetScores() {
    PontoA = 0;
    PontoB = 0;

    PontoAElement.textContent = PontoA;
    PontoBElement.textContent = PontoB;
}

function checkWinner() {
    if (PontoA >= 12) {
        alert(`${TimeAName.value} Venceu a Partida!`);
        resetScores();
    } else if (PontoB >= 12) {
        alert(`${TimeBName.value} Venceu a Partida!`);
        resetScores();
    }
}