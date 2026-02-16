fetch('https://jsonplaceholder.typicode.com/comments?postsId=1')
    .then(response => response.json())
    .then(json => {
        console.log(json);

        const posts_details = JSON.parse(localStorage.getItem('details_of_posts'));
        console.log(posts_details);

        let comments = json.filter(comment => comment.postId === posts_details.id);
        console.log(comments);

        let wrapper_of_text = document.createElement('div');
        let post_text = document.createElement('p');

        let heading_post = document.createElement('h3');
        heading_post.innerText = `${posts_details.id}. ${posts_details.title}`;
        post_text.innerText = `${posts_details.body}`;

        document.body.append(wrapper_of_text);
        wrapper_of_text.append(heading_post, post_text);

        for (const comment of comments) {
            let comments_text = document.createElement('p');
            let heading_comment = document.createElement('h4');
            heading_comment.innerText = `${comment.name}`;
            comments_text.innerText = `${comment.body}`;
            wrapper_of_text.append(heading_comment, comments_text);
        }

    })