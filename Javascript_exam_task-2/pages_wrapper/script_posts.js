const posts_details = JSON.parse(localStorage.getItem('details_of_posts'));
console.log(posts_details);

let wrapper_text = document.createElement('div');
let post_text = document.createElement('p');

post_text.innerText = `${posts_details.id} ${posts_details.title}

${posts_details.body}
`;

document.body.append(wrapper_text);
wrapper_text.append(post_text);

