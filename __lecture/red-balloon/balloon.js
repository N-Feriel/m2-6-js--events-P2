let ballon = document.getElementById('balloon');

let BallonSize = 200;
let N = 20;

// window.addEventListener('keydown', () => {
//     ballon.style.fontSize = `${BallonSize}px`;
//     console.log('hello')
// })

window.addEventListener('keyup', (e) => {
    if (e.key == 40) {

        ballon.style.fontSize = `${N}px`;
        console.log(e)
    }

    if (e.key == 38) {

        ballon.style.fontSize = `${BallonSize}px`;
        console.log('hello')
    }


})