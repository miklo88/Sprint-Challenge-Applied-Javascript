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

// ///////////////////////////////////////////my coded content. /////////////////////////////////////
// const headerContainer = document.createElement('div');
// headerContainer.classList.add('header-container');

function Header() {
    const div = document.createElement('div');
    div.classList.add('header');

    let span = document.createElement('span');
    span.classList.add('date');
    span.textContent = 'MARCH 28, 2019';

    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';

    let span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = '98°'

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2);

    let headerSection = document.querySelector('.header-container');
    headerSection.appendChild(div);

    return div
}
Header();









