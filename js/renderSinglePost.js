import renderHeader from './renderHeader.js';
import renderContent from './renderContent.js';
import renderFooter from './renderFooter.js';

function renderSinglePost(data) {
    return `<div class="post">
                ${renderHeader(data.author, data.postTimestamp)}
                ${renderContent(data.content)}
                ${renderFooter()}
            </div>`;
}

export default renderSinglePost;