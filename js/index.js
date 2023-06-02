var myScore = 0;
var pcScore = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function choice(value) {
    let element = document.querySelector('#my_choice')
    element.innerHTML = '<img src="../images/' + value + 'x2.png"><p>' + value + '</p>'

    pcChoice(value);
}

async function pcChoice(value) {

    const array = ['Paper', 'Rock', 'Scissors']
    const choice = array[Math.floor(Math.random() * array.length)];


    const divResult = document.getElementById('result')
    const myPoints = document.getElementById('my_score')
    const pcPoints = document.getElementById('pc_score')

    let element = document.querySelector('#pc_choice')
    element.innerHTML = '<img src="../images/' + choice + 'x2.png"><p>' + choice + '</p>'

    if (value === choice) {
        await sleep(1000);
        divResult.innerHTML = '<h1>EMPATE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    } else if (value == 'Scissors' && choice == 'Paper') {
        await sleep(1000);

        myScore++
        myPoints.innerHTML = myScore
        divResult.innerHTML = '<h1>GANASTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'

    } else if (value == 'Scissors' && choice == 'Rock') {
        await sleep(1000);
        pcScore++
        pcPoints.innerHTML = pcScore
        divResult.innerHTML = '<h1>PERDISTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    } else if (value == 'Paper' && choice == 'Scissors') {
        await sleep(1000);
        pcScore++
        pcPoints.innerHTML = pcScore
        divResult.innerHTML = '<h1>PERDISTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    } else if (value == 'Paper' && choice == 'Rock') {
        await sleep(1000);

        myScore++
        myPoints.innerHTML = myScore
        divResult.innerHTML = '<h1>GANASTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    } else if (value == 'Rock' && choice == 'Scissors') {
        await sleep(1000);

        myScore++
        myPoints.innerHTML = myScore
        divResult.innerHTML = '<h1>GANASTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    } else if (value == 'Rock' && choice == 'Paper') {
        await sleep(1000);
        pcScore++
        pcPoints.innerHTML = pcScore
        divResult.innerHTML = '<h1>PERDISTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    }
}