function homePage(){

let contentDiv = document.getElementById('content');

let pizzaLogo = document.createElement('img');
pizzaLogo.src='./images/logo.png';
contentDiv.appendChild(pizzaLogo);

let description = document.createElement('p');
description.textContent=`Luigi's pizza is so well known, that there is no need to 
create a magnificent site to showcase our cuisine. 
Luigi's pizza speaks for itself!`;
contentDiv.appendChild(description);

};

export default homePage;