fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {

        const selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
        console.log(selectedUser)

        let main_wrapper = document.createElement('div');
        main_wrapper.classList.add('main-wrapper');
        let postsWrapper=document.createElement('div');
        postsWrapper.classList.add('posts-wrapper');
        let h3_name = document.createElement('h3');
        let paragraph_wrapper= document.createElement('div');
        paragraph_wrapper.classList.add('paragraph-wrapper');

        let paragraph_info = document.createElement('p');
        let paragraph_address = document.createElement('p');
        let paragraph_company = document.createElement('p');

        h3_name.innerText = `${selectedUser.name}`;

        paragraph_info.innerText = `id: ${selectedUser.id}
user name: ${selectedUser.username}
phone: ${selectedUser.phone}
email: ${selectedUser.email}
website: ${selectedUser.website}`;

        paragraph_address.innerText = `Address:
city: ${selectedUser.address.city}
street: ${selectedUser.address.street}
geo location: ${selectedUser.address.geo.lat} ${selectedUser.address.geo.lng}
suite: ${selectedUser.address.suite}
zipcode: ${selectedUser.address.zipcode}`;

        paragraph_company.innerText = `Company:
name: ${selectedUser.company.name}
bs: ${selectedUser.company.bs}
catch phrase: ${selectedUser.company.catchPhrase}
`;
        let button_posts = document.createElement('button');
        button_posts.innerText = 'post of current user';

        const posts = json.filter(post => post.userId === selectedUser.id);

        for (const post of posts) {
            let postsInfo = document.createElement("div");
            postsInfo.classList.add('postsInfo');

            let postDetailsButton = document.createElement('button');
            let paragraph_elem = document.createElement('p');
            // let postId= post.id;
            console.log(post)
            button_posts.addEventListener('click', () => {
                paragraph_elem.innerText = post.title;
                postDetailsButton.innerText = 'post details';
                postsWrapper.append(postsInfo)
                postsInfo.append(paragraph_elem, postDetailsButton);
            })
            postDetailsButton.addEventListener('click', () => {
                localStorage.setItem('details_of_posts', JSON.stringify(post));
                window.location.href = ("post-details.html");
            })
        }

        document.body.append(main_wrapper,postsWrapper);
        main_wrapper.append(h3_name, paragraph_wrapper,button_posts);
        paragraph_wrapper.append(paragraph_info,paragraph_address,paragraph_company)
    })
