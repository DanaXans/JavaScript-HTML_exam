fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);


        const arr = json;

        for (const user of arr) {
            let usersWrapper = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let buttonUrl = document.createElement('button');

            h3.innerText = `${user.name}`;
            p.innerText = `${user.id}`;

            buttonUrl.innerText = 'Details';
            buttonUrl.id=user.id;

            buttonUrl.addEventListener('click', (id) => {
                localStorage.setItem('selectedUser', JSON.stringify(user));
                window.location.href = "user-details.html";
            });
            document.body.append(usersWrapper);
            usersWrapper.append(h3, p, buttonUrl);
        }


    })

