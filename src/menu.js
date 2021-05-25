function menuPage(){

    let contentDiv = document.getElementById('content');

    let header = document.createElement('h2');
    header.textContent=`Pizza Menu`;
    contentDiv.appendChild(header);

    // function for new menu items
    function createMenuItem(name,desc){
        let menuItem = document.createElement('div');
        menuItem.classList.add('menuItems');

        let menuItemName = document.createElement('h3');
        let menuItemImage = document.createElement('img');
        menuItemImage.classList.add('pizzaImages');
        let menuItemDesc = document.createElement('p');

        menuItemName.textContent=name;
        menuItemImage.src=`images/menu/${name.toLowerCase()}.jpeg`;
        menuItemDesc.textContent=desc;

        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuItemDesc);

        return menuItem;
    }

    contentDiv.appendChild(
        createMenuItem(
            'Buffalo',
            `Zesty buffalo sauce on Luigi's signature pizza crust.`
        )
    );

    contentDiv.appendChild(
        createMenuItem(
            'Cheese',
            `Keeping it simple, just cheese on Luigi's pizza.`
        )
    );
    
    contentDiv.appendChild(
        createMenuItem(
            'Chicken',
            `Premium chicken on Luigi's signature pizza.`
        )
    );

}

export default menuPage;