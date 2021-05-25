import homePage from './home';
import contactPage from './contact';
import menuPage from './menu';

function createHeader(){

    // empty current webpage
    document.getElementById('content').textContent='';

    // create header with restaurant name as h1
    const header = document.createElement('header');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent=`Luigi's Pizza`;
    header.appendChild(restaurantName);

    // create navigation bar for header
    let nav = document.createElement('nav');

    // append a home button to navigation bar
    let homeButton = document.createElement('button');
    homeButton.textContent='Home';
    homeButton.classList.add('navButtons');
    nav.appendChild(homeButton);

    homeButton.addEventListener('click',function(){
        createHeader();
        homePage();
    });

    // append a contact button to navigation bar
    let contactButton = document.createElement('button');
    contactButton.textContent='Contact Us';
    contactButton.classList.add('navButtons');
    nav.appendChild(contactButton);

    contactButton.addEventListener('click',function(){
        createHeader();
        contactPage();
    });

    // append a pizza menu button to navigation bar
    let menuButton = document.createElement('button');
    menuButton.textContent='Pizza Menu';
    menuButton.classList.add('navButtons');
    nav.appendChild(menuButton);

    menuButton.addEventListener('click',function(){
        createHeader();
        menuPage();
    });

    // add navigation bar to header 
    header.appendChild(nav);

    // display header to the webpage
    document.getElementById('content').appendChild(header);

}

createHeader();
homePage();