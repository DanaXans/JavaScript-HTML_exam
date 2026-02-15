fetch('https://jsonplaceholder.typicode.com/posts/id/comments')
    .then(response => response.json())
    .then(json => {
        console.log(json);

        const posts_details = JSON.parse(localStorage.getItem('details_of_posts'));
        console.log(posts_details);

        let wrapper_text = document.createElement('div');
        let post_text = document.createElement('p');
        let h3 = document.createElement('h3');

        post_text.innerText = `${posts_details.id}. ${posts_details.title}.

${posts_details.body}
`;
        console.log(post_text.innerText);

        document.body.append(wrapper_text);
        wrapper_text.append(post_text);
    })