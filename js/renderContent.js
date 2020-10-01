import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';

function renderContent() {
    return `<div>
                ${renderContentText()}
                ${renderContentGallery()}
            </div>`;
}

export default renderContent;