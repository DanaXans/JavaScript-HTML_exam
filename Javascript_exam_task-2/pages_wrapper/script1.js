fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);

        let users = json;
        for (const user of users) {
            let usersWrapper = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            h3.innerText = `${user.name}`;
            p.innerText = `${user.id}`;

            let buttonUrl=document.createElement('button');
            buttonUrl.innerText = 'Details';

            document.body.append(usersWrapper);
            usersWrapper.append(h3,p,buttonUrl);
        }
    })

