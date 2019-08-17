// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// function Header(content) {}
// ///////////////////////////////////////////my coded content. /////////////////////////////////////
// const headerContainer = document.createElement('div');
// headerContainer.classList.add('header-container');
let headerContainer = document.querySelector('header-container');
headerContainer.appendChild(header);

let header = document.createElement('div');
header.classList.add('header');


let date = document.createElement('span');
date.classList.add('date');
header.appendChild(date);

let h1 = document.createElement('h1');
h1.classList.add('h1');
header.appendChild(h1);

let temp = document.createElement('span');
temp.classList.add('temp');
header.appendChild(temp);









