import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);
    }

    const feedDOM = document.querySelector('main');
    feedDOM.innerHTML = HTML;

    // susirasti dominancius elementus .see-more
    const allSeeMoreDOM = document.querySelectorAll('.post .more');
    console.log(allSeeMoreDOM);

    // pradedam stebeti paspaudimus ant ju
    for (let i = 0; i < allSeeMoreDOM.length; i++) {
        const seeMore = allSeeMoreDOM[i];
        seeMore.addEventListener('click', () => {
            seeMore.closest('.content').classList.add('show');
        });
    }
}

export default renderPosts;