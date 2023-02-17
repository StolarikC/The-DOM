const input = document.querySelector('input');

// input.addEventListener('change', function (e) {
//     console.log('CHANGIN')
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value
})