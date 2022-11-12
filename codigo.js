function createGame(player1, hour, player2) {
    return`
    <li>
        <img src="assets/${player1}.svg" alt="Icone do ${player1}">
        <strong>${hour}</strong>
        <img src="assets/${player2}.svg" alt="Icone da ${player2}">
    </li>`
}

let delay = -0.4
function createCard(date, hours, games) {
    delay = delay + 0.4
    return `<div class="card" style="animation-delay: ${delay}s;">
        <h2>
            ${date} <span>${hours}</span>
        </h2>
        <ul>
            ${games}
        </ul>
    </div>`
}

document.querySelector('#cards').innerHTML = 
    
        createCard('24/11', 'quinta',
            createGame('brazil', '16:00' , 'albania') +
            createGame('brazil', '19:00' , 'argentina'))
        +
        createCard('25/11', 'sexta', createGame('brazil', '16:00' , 'balearic_islands'))
        +
        createCard('26/11', 'sabado', createGame('brazil', '09:00' , 'australia'))

    