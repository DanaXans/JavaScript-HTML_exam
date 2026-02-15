const selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
console.log(selectedUser)

let wrapper = document.createElement('div');
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
name: ${selectedUser.company.name}
bs: ${selectedUser.company.bs}
catch phrase: ${selectedUser.company.catchPhrase}
`;

let button_posts = document.createElement('button');
button_posts.id = selectedUser.id;
button_posts.innerText = 'post of current user';
button_posts.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            const arrPosts = json;
            let p = document.createElement('p');
            for (const post of arrPosts) {
                const selectedPosts = post.userId;
                p.innerText =selectedPosts;

            }
            console.log(arrPosts);
            document.body.appendChild(p);
        })
})

// document.body.innerText=`${selectedUser.name}`
document.body.append(wrapper);
wrapper.append(h3_name, button_posts);
h3_name.append(paragraph_info);