import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);
    }

    const feedDOM = document.querySelector('main');
    feedDOM.innerHTML = HTML;
}

export default renderPosts;