const selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
console.log(selectedUser)

let h3_name = document.createElement('h3');
let paragraph_info = document.createElement('p');

h3_name.innerText = `${selectedUser.name}`;
paragraph_info.innerText = `id: ${selectedUser.id}
user name: ${selectedUser.username}
phone: ${selectedUser.phone}
email: ${selectedUser.email}
website: ${selectedUser.website}

Address:
city: ${selectedUser.address.city}
street: ${selectedUser.address.street}
geo location: ${selectedUser.address.geo.lat} ${selectedUser.address.geo.lng}
suite: ${selectedUser.address.suite}
zipcode: ${selectedUser.address.zipcode}

Company:
`;

// document.body.innerText=`${selectedUser.name}`
document.body.append(h3_name);
h3_name.append(paragraph_info);