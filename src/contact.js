function contactPage(){

    let contentDiv = document.getElementById('content');

    let header = document.createElement('h2');
    header.textContent=`Contact Us`;
    contentDiv.appendChild(header);

    // function for creating new contacts
    function createNewContact(name,number,email){

    let contactCard = document.createElement('div');
    contactCard.id='contactCard';

    let contactName = document.createElement('h3');
    contactName.textContent=`${name}'s Contact Info`;
    contactCard.appendChild(contactName);

    let contactNumber = document.createElement('p');
    contactNumber.textContent=number;
    contactCard.appendChild(contactNumber);

    let contactEmail = document.createElement('p');
    contactEmail.textContent=email;
    contactCard.appendChild(contactEmail);

    return contactCard;
}

contentDiv.appendChild(
    createNewContact('Luigi','123-456-7890','luigi@email.com')
);

contentDiv.appendChild(
    createNewContact('Mario','111-222-3333','mario@email.com')
);

contentDiv.appendChild(
    createNewContact('Yoshi','444-555-6666','yoshi@email.com')
);

};

export default contactPage;