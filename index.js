var ran1 = Math.floor(Math.random() *6 + 1)
var ran2 = Math.floor(Math.random() *6 + 1)
var rdice = 'images/dice'+ran1+'.png'
var ndice = 'images/dice'+ran2+'.png'
var img1 = document.querySelector('img').setAttribute('src',rdice);
var img2 = document.querySelectorAll('img')[1].setAttribute('src', ndice);


if (ran1 === ran2) {
    document.querySelector('h1').textContent = 'Drow'
}
else if (ran1 > ran2) {
    document.querySelector('h1').textContent = 'Player 1 Won'
}

else if (ran1 < ran2) {
    document.querySelector('h1').textContent = 'Player 2 Won'
}