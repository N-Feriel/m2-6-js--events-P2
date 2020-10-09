//let submitB = document.getElementById('submit');
let form = document.getElementById('myForm')
let errorMsg = document.getElementById('error');


form.addEventListener('submit', validate)


let passInput = document.getElementById('password');
let passConfrim = document.getElementById('cPassword');
let inputs = document.querySelectorAll('input');

function validate(event) {
    event.preventDefault();

    let validForm = true;




    clearErrors();

    if (passInput.value.length < 10) {
        passInput.style.border = "4px solid pink";
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = `Your password is too short! How about "${generateRandomPassword()}"?.`;


    } else if (passInput.value != passConfrim.value) {
        passConfrim.style.border = "4px solid pink";
        passConfrim.style.outline = "4px solid blue";
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'confirm password must mutch with password';

    } else if (validForm) {
        window.alert('Success!!');
        //reset the form after sent 
        form.reset();
    }
    return false
}


function clearErrors() {

    inputs.forEach(input => {
        input.style.border = '1px solid lightgrey';
        input.style.outline = 'none';
    })

    errorMsg.style.display = 'none';
}

form.addEventListener('reset', clearErrors)


//Create generateRandomPassword 

let nouns = ['eat', 'life', 'all', 'you', 'me', 'shopping', 'art', 'web', 'classroom', 'kids', 'home', 'success', 'errors',
    'red', 'blue', 'water', 'phone', 'music', 'movie', 'cofee', 'the', 'car', 'yellow', '3', '1'
];

const generateRandomPassword = function() {
    let randomPassword = [];

    for (let i = 0; i < 5; i++) {
        randomPassword[i] = nouns[Math.floor(Math.random() * nouns.length)];
    }
    return (randomPassword.join('-'));
}