// const allImages = document.getElementsByTagName('img');
// // 'getting' all 'img'-tag elements and collecting them under the const 'allImages'  (NOT AN ARRAY)


// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
// }


const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'darkcyan'
    link.style.textDecorationColor = 'purple'
    link.style.textDecorationStyle = 'wavy'
}




// APPEND & APPENDchild

// document.createElement('')
// new Image
const newImg = document.createElement('img')
newImg.src = 'https://th.bing.com/th/id/OIP.3F5aE5W5NNq57n0Q3rV81wHaEl?pid=ImgDet&rs=1'
document.body.appendChild(newImg)
newImg.classList.add('square')
// new h3
const newH3 = document.createElement('h3')
newH3.innerText = 'I am new!'
document.body.appendChild(newH3)

// Append method
const p = document.querySelector('p')
p.append('I am new text yaaaaayyy!!!')
// appendChild does not accept text
p.append('I am new text!', 'I am also, separate, new text!')

const newB = document.createElement('b')
// add to the end of 'newB'
newB.append('Hi!')
// add to the beginning of 'newB'
newB.prepend('Hi!')


// insertAdjacentElement
const h2 = document.createElement('h2')
h2.append('Are adorable chickens!')
const h1 = document.querySelector('h1');
// insert('destination', 'what to insert there')
h1.insertAdjacentElement('afterend', h2)
    < h2 > Are adorable chickens!​</h2 >
// other 'insertAdjacentElement' destinations are:
// 'beforebegin', 'afterbegin', 'beforeend'

// removeChild method = removes a child from the targeted parent element of said child.
const firstLi = document.querySelector('li')
const ul = firstLi.parentElement
ul.removeChild(firstLi)

// other example:
const b = document.querySelector('b')
b.parentElement.removeChild(b);

// REMOVE method (DNW in IntExp)
const img = document.querySelector('img')
img.remove()

// MUCH MORE DIRECT AND SIMPLER
// BUT DOES NOT WORK IN INTERNET EXPLORER!!!