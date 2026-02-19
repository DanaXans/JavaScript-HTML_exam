fetch('https://jsonplaceholder.typicode.com/comments?postsId=1')
    .then(response => response.json())
    .then(json => {
        console.log(json);

        const posts_details = JSON.parse(localStorage.getItem('details_of_posts'));
        console.log(posts_details);

        let comments = json.filter(comment => comment.postId === posts_details.id);
        console.log(comments);
        ///
        let object_post = document.createElement('div');
        object_post.classList.add('object_post');
        let post_text = document.createElement('p');
        //текст поста
        let heading_post = document.createElement('h3');
        heading_post.innerText = `${posts_details.id}. ${posts_details.title}`;
        post_text.innerText = `${posts_details.body}`;


        object_post.append(heading_post, post_text);
        ///
        let comments_of_post = document.createElement('div');
        comments_of_post.classList.add('comments_of_post');
        document.body.append(object_post, comments_of_post);

        for (const comment of comments) {
            //текст комментов
            let p_comment = document.createElement('p');
            let h4_comment = document.createElement('h4');
            h4_comment.innerText = `${comment.name}`;
            p_comment.innerText = `${comment.body}`;

            let p_and_h4_wrap = document.createElement('div');
            p_and_h4_wrap.classList.add('p_and_h4_wrap');
            p_and_h4_wrap.append(h4_comment, p_comment);
            comments_of_post.append(p_and_h4_wrap);
        }

    })