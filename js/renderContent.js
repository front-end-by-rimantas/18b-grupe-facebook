import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';

function renderContent(data) {
    console.log(data);

    return `<div>
                ${renderContentText(data.text)}
                ${renderContentGallery()}
            </div>`;
}

export default renderContent;