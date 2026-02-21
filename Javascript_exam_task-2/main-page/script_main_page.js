fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);

        const arr = json;

        for (const user of arr) {
            let usersWrapper = document.createElement('div');
            usersWrapper.classList.add('userWrapper');
            let generalWrapper = document.createElement('div');
            generalWrapper.classList.add('generalWrapper');

            const heading_user_info = document.createElement('h3');
            const paragraph_user_info = document.createElement('p');

            let buttonUrl = document.createElement('button');
            let textWrapper = document.createElement('div');
            textWrapper.classList.add('textWrapper');

            paragraph_user_info.innerText = `${user.id}.`;
            heading_user_info.innerText = `${user.name}`;
            buttonUrl.innerText = 'Details';

            buttonUrl.id = user.id;

            buttonUrl.addEventListener('click', () => {
                localStorage.setItem('selectedUser', JSON.stringify(user));
                window.location.href = "../users/user-details.html";
            });
            document.body.append(textWrapper, generalWrapper);
            textWrapper.append(paragraph_user_info, heading_user_info);
            generalWrapper.append(textWrapper, buttonUrl);
        }
    })