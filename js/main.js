import ajax from './ajax.js';
import renderPosts from './renderPosts.js';

ajax(renderPosts);


/*

renderPosts()
    FOR -> renderSinglePost()
        renderHeader()
        renderContent()
            renderContentText()
            renderContentGallery()
        renderFooter()

*/