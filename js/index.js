var myScore = 0;
var pcScore = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function myChoice(value) {
    const divMyChoice = document.querySelector('#my_choice')
    divMyChoice.innerHTML = '<img src="/../images/' + value + 'x2.png"><p>' + value + '</p>'

    pcChoice(value);
}

async function pcChoice(value) {

    const optionsArray = ['Paper', 'Rock', 'Scissors']
    const PC_choice = optionsArray[Math.floor(Math.random() * optionsArray.length)];

    const divResult = document.getElementById('result')
    const pMyScore = document.getElementById('my_score')
    const pPcScore = document.getElementById('pc_score')

    let divPcChoice = document.querySelector('#pc_choice')
    divPcChoice.innerHTML = '<img src="/images/' + PC_choice + 'x2.png"><p>' + PC_choice + '</p>'

    if (value === PC_choice) {
        await sleep(1000);
        divResult.innerHTML = '<h1>EMPATE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    } else if (value == 'Scissors' && PC_choice == 'Paper') {
        await sleep(1000);
        myScore++
        pMyScore.innerHTML = myScore
        divResult.innerHTML = '<h1>GANASTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'

    } else if (value == 'Scissors' && PC_choice == 'Rock') {
        await sleep(1000);
        pcScore++
        pPcScore.innerHTML = pcScore
        divResult.innerHTML = '<h1>PERDISTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'

    } else if (value == 'Paper' && PC_choice == 'Scissors') {
        await sleep(1000);
        pcScore++
        pPcScore.innerHTML = pcScore
        divResult.innerHTML = '<h1>PERDISTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'

    } else if (value == 'Paper' && PC_choice == 'Rock') {
        await sleep(1000);
        myScore++
        pMyScore.innerHTML = myScore
        divResult.innerHTML = '<h1>GANASTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'

    } else if (value == 'Rock' && PC_choice == 'Scissors') {
        await sleep(1000);
        myScore++
        pMyScore.innerHTML = myScore
        divResult.innerHTML = '<h1>GANASTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'

    } else if (value == 'Rock' && PC_choice == 'Paper') {
        await sleep(1000);
        pcScore++
        pPcScore.innerHTML = pcScore
        divResult.innerHTML = '<h1>PERDISTE</h1>'
        await sleep(1000);
        divResult.innerHTML = '<div id="my_choice"></div><div class="separator"></div><div id="pc_choice"></div>'
    }
}