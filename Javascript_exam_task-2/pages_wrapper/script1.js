fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);


        const arr = json;

        for (const user of arr) {
            let usersWrapper = document.createElement('div');
            usersWrapper.classList.add('userWrapper');
            let generalWrapper= document.createElement('div');
            generalWrapper.classList.add('generalWrapper');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let buttonUrl = document.createElement('button');
            let textWrapper = document.createElement('div');
            textWrapper.classList.add('textWrapper');
            p.innerText = `${user.id}.`;
            h3.innerText = `${user.name}`;


            buttonUrl.innerText = 'Details';
            buttonUrl.id = user.id;

            buttonUrl.addEventListener('click', () => {
                localStorage.setItem('selectedUser', JSON.stringify(user));
                window.location.href = "user-details.html";
            });
            document.body.append(textWrapper,generalWrapper);
            textWrapper.append(p, h3);
            generalWrapper.append(textWrapper,buttonUrl);
        }


    })


