const words = ["TAK","DZIEWCZYNA","ZEGAR","NIE","KRZESTO","MAŁPA","NIEBIESKI","PURPUROWY","ZOO","RÓZOWY","ŁÓŻKO","PIES","PAPUGA","KROGA","ŚWINIA","WĄŻ","CHŁOPAK","STÓT","MANDARYNKA","JABŁKO","TELEWIZOR","KOC","ZWIERZE","MONITOR","SAMOCHÓD"]
const challenge = () => {
    task = words[Math.floor(Math.random() *words.length)];
}
let task
window.onload = challenge()
let failures = 0
let success = 0
let wordArea = document.getElementById("wordArea")
let alphabet = document.getElementsByClassName("button")
let gameOver = document.getElementById("gameOver")

for (i = 0; i < 32; i++ ) {
    alphabet[i].disabled = "true"
}

let rows = document.getElementsByClassName("row")

let gameLetters = document.getElementsByClassName("word")

let penalty = document.getElementsByClassName("fail")

let startButton = document.getElementById("start")

let resetButton = document.getElementById("resetButton")

document.addEventListener("click",(event)=> {
    if (event.target == startButton) {
        startButton.style.display = "none"
        for (i = 0; i < task.length; i++) {
            gameLetters[i].style.display = "inline"
        }
        for (i = 0; i < 32; i++ ) {
            alphabet[i].disabled = ""
        }
    }
})

document.addEventListener("click",(event)=> {
    let taskArray = task.split("")
    let helper = []
    switch (true) {
        case event.target == alphabet[0]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "A") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "A"
                    alphabet[0].style.backgroundColor = "blue"
                    alphabet[0].style.color = "white"
                    alphabet[0].disabled = "true"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[0].style.backgroundColor = "red"
                alphabet[0].style.color = "white"
                alphabet[0].disabled = "true"
            }
            break
        case event.target == alphabet[1]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ą") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ą"
                    alphabet[1].style.backgroundColor = "blue"
                    alphabet[1].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[1].style.backgroundColor = "red"
                alphabet[1].style.color = "white"
                alphabet[1].disabled = "true"
            }
            break
        case event.target == alphabet[2]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "B") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "B"
                    alphabet[2].style.backgroundColor = "blue"
                    alphabet[2].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[2].style.backgroundColor = "red"
                alphabet[2].style.color = "white"
                alphabet[2].disabled = "true"
            }
            break
        case event.target == alphabet[3]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "C") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "C"
                    alphabet[3].style.backgroundColor = "blue"
                    alphabet[3].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[3].style.backgroundColor = "red"
                alphabet[3].style.color = "white"
                alphabet[3].disabled = "true"
            }
            break
        case event.target == alphabet[4]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ć") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ć"
                    alphabet[4].style.backgroundColor = "blue"
                    alphabet[4].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[4].style.backgroundColor = "red"
                alphabet[4].style.color = "white"
                alphabet[4].disabled = "true"
            }
            break
        case event.target == alphabet[5]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "D") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "D"
                    alphabet[5].style.backgroundColor = "blue"
                    alphabet[5].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[5].style.backgroundColor = "red"
                alphabet[5].style.color = "white"
                alphabet[5].disabled = "true"
            }
            break
        case event.target == alphabet[6]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "E") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "E"
                    alphabet[6].style.backgroundColor = "blue"
                    alphabet[6].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[6].style.backgroundColor = "red"
                alphabet[6].style.color = "white"
                alphabet[6].disabled = "true"
            }
            break
        case event.target == alphabet[7]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ę") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ę"
                    alphabet[7].style.backgroundColor = "blue"
                    alphabet[7].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[7].style.backgroundColor = "red"
                alphabet[7].style.color = "white"
                alphabet[7].disabled = "true"
            }
            break
        case event.target == alphabet[8]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "F") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "F"
                    alphabet[8].style.backgroundColor = "blue"
                    alphabet[8].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[8].style.backgroundColor = "red"
                alphabet[8].style.color = "white"
                alphabet[8].disabled = "true"
            }
            break
        case event.target == alphabet[9]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "G") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "G"
                    alphabet[9].style.backgroundColor = "blue"
                    alphabet[9].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[9].style.backgroundColor = "red"
                alphabet[9].style.color = "white"
                alphabet[9].disabled = "true"
            }
            break
        case event.target == alphabet[10]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "H") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "H"
                    alphabet[10].style.backgroundColor = "blue"
                    alphabet[10].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[10].style.backgroundColor = "red"
                alphabet[10].style.color = "white"
                alphabet[10].disabled = "true"
            }
            break
        case event.target == alphabet[11]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "I") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "I"
                    alphabet[11].style.backgroundColor = "blue"
                    alphabet[11].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[11].style.backgroundColor = "red"
                alphabet[11].style.color = "white"
                alphabet[11].disabled = "true"
            }
            break
        case event.target == alphabet[12]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "J") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "J"
                    alphabet[12].style.backgroundColor = "blue"
                    alphabet[12].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[12].style.backgroundColor = "red"
                alphabet[12].style.color = "white"
                alphabet[12].disabled = "true"
            }
            break
        case event.target == alphabet[13]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "K") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "K"
                    alphabet[13].style.backgroundColor = "blue"
                    alphabet[13].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[13].style.backgroundColor = "red"
                alphabet[13].style.color = "white"
                alphabet[13].disabled = "true"
            }
            break
        case event.target == alphabet[14]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "L") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "L"
                    alphabet[14].style.backgroundColor = "blue"
                    alphabet[14].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[14].style.backgroundColor = "red"
                alphabet[14].style.color = "white"
                alphabet[14].disabled = "true"
            }
            break
        case event.target == alphabet[15]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ł") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ł"
                    alphabet[15].style.backgroundColor = "blue"
                    alphabet[15].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[15].style.backgroundColor = "red"
                alphabet[15].style.color = "white"
                alphabet[15].disabled = "true"
            }
            break
        case event.target == alphabet[16]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "M") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "M"
                    alphabet[16].style.backgroundColor = "blue"
                    alphabet[16].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[16].style.backgroundColor = "red"
                alphabet[16].style.color = "white"
                alphabet[16].disabled = "true"
            }
            break
        case event.target == alphabet[17]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "N") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "N"
                    alphabet[17].style.backgroundColor = "blue"
                    alphabet[17].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[17].style.backgroundColor = "red"
                alphabet[17].style.color = "white"
                alphabet[17].disabled = "true"
            }
            break
        case event.target == alphabet[18]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ń") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ń"
                    alphabet[18].style.backgroundColor = "blue"
                    alphabet[18].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[18].style.backgroundColor = "red"
                alphabet[18].style.color = "white"
                alphabet[18].disabled = "true"
            }
            break
        case event.target == alphabet[19]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "O") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "O"
                    alphabet[19].style.backgroundColor = "blue"
                    alphabet[19].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[19].style.backgroundColor = "red"
                alphabet[19].style.color = "white"
                alphabet[19].disabled = "true"
            }
            break
        case event.target == alphabet[20]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ó") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ó"
                    alphabet[20].style.backgroundColor = "blue"
                    alphabet[20].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[20].style.backgroundColor = "red"
                alphabet[20].style.color = "white"
                alphabet[20].disabled = "true"
            }
            break
        case event.target == alphabet[21]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "P") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "P"
                    alphabet[21].style.backgroundColor = "blue"
                    alphabet[21].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[21].style.backgroundColor = "red"
                alphabet[21].style.color = "white"
                alphabet[21].disabled = "true"
            }
            break
        case event.target == alphabet[22]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "R") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "R"
                    alphabet[22].style.backgroundColor = "blue"
                    alphabet[22].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[22].style.backgroundColor = "red"
                alphabet[22].style.color = "white"
                alphabet[22].disabled = "true"
            }
            break
        case event.target == alphabet[23]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "S") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "S"
                    alphabet[23].style.backgroundColor = "blue"
                    alphabet[23].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[23].style.backgroundColor = "red"
                alphabet[23].style.color = "white"
                alphabet[23].disabled = "true"
            }
            break
        case event.target == alphabet[24]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ś") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ś"
                    alphabet[24].style.backgroundColor = "blue"
                    alphabet[24].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[24].style.backgroundColor = "red"
                alphabet[24].style.color = "white"
                alphabet[24].disabled = "true"
            }
            break
        case event.target == alphabet[25]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "T") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "T"
                    alphabet[25].style.backgroundColor = "blue"
                    alphabet[25].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[25].style.backgroundColor = "red"
                alphabet[25].style.color = "white"
                alphabet[25].disabled = "true"
            }
            break
        case event.target == alphabet[26]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "U") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "U"
                    alphabet[26].style.backgroundColor = "blue"
                    alphabet[26].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[26].style.backgroundColor = "red"
                alphabet[26].style.color = "white"
                alphabet[26].disabled = "true"
            }
            break
        case event.target == alphabet[27]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "W") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "W"
                    alphabet[27].style.backgroundColor = "blue"
                    alphabet[27].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[27].style.backgroundColor = "red"
                alphabet[27].style.color = "white"
                alphabet[27].disabled = "true"
            }
            break
        case event.target == alphabet[28]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Y") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Y"
                    alphabet[28].style.backgroundColor = "blue"
                    alphabet[28].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[28].style.backgroundColor = "red"
                alphabet[28].style.color = "white"
                alphabet[28].disabled = "true"
            }
            break
        case event.target == alphabet[29]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Z") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Z"
                    alphabet[29].style.backgroundColor = "blue"
                    alphabet[29].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[29].style.backgroundColor = "red"
                alphabet[29].style.color = "white"
                alphabet[29].disabled = "true"
            }
            break
        case event.target == alphabet[30]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ź") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ź"
                    alphabet[30].style.backgroundColor = "blue"
                    alphabet[30].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[30].style.backgroundColor = "red"
                alphabet[30].style.color = "white"
                alphabet[30].disabled = "true"
            }
            break
        case event.target == alphabet[31]:
            for (i = 0; i < taskArray.length; i++) {
                if (taskArray[i] == "Ż") {
                    helper.push(i)
                    success++
                    gameLetters[i].textContent = "Ż"
                    alphabet[31].style.backgroundColor = "blue"
                    alphabet[231].style.color = "white"
                }
            }
            if (helper.length == 0) {
                failures++
                alphabet[31].style.backgroundColor = "red"
                alphabet[31].style.color = "white"
                alphabet[31].disabled = "true"
            }
            break
    }
    for (i = 0; i < failures; i++) {
        penalty[i].style.display = "inline"
    }
    if (failures >=5) {
        for (i = 0; i < rows.length; i++) {
            rows[i].style.display = "none"
        }
        for (i = 0; i < taskArray.length; i++) {
            gameLetters[i].textContent = taskArray[i]
        }
        gameOver.style.display = "flex"
        gameOver.textContent = "Przegrałeś"
    }
    if (success >= taskArray.length) {
        for (i = 0; i < rows.length; i++) {
            rows[i].style.display = "none"
        }
        gameOver.style.display = "flex"
        gameOver.textContent = "Wygrałeś."
    }
})

document.addEventListener("click", (event)=> {
    if (event.target == resetButton) {
        window.location.reload(true)
    }
})