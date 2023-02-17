const btn = document.querySelector('#v2');

// SECOND METHOD OF EVENT WRITING
btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!");
}

function scream() {
    console.log("AAAAAAHHHHHH");
    console.log("Stop touching me!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

// THIRD METHOD OF EVENT WRITING
// addEventListener

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('CLICKED!')
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log('SHOUT!')
}

const tasButton = document.querySelector('#tas');
// // this method: shout will overwrite twist.
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
