function renderContentGallery(data) {
    // validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija, reikia duoti tinkama informacija');
        return '';
    }

    // logika
    const maxGallerySize = 4;
    const totalPhotosCount = data.length;
    const visiblePhotoCount = totalPhotosCount > maxGallerySize ? maxGallerySize : totalPhotosCount;

    let extraHTML = '';
    if (totalPhotosCount > maxGallerySize) {
        extraHTML = `<div class="extra">+${totalPhotosCount - maxGallerySize}</div>`;
    }

    let imagesHTML = '';
    for (let i = 0; i < visiblePhotoCount; i++) {
        if (i === visiblePhotoCount - 1) {
            imagesHTML += `<div class="img">
                                <img src="./img/posts/${data[i]}" alt="User post gallery picture">
                                ${extraHTML}
                            </div>`;
        } else {
            imagesHTML += `<div class="img">
                                <img src="./img/posts/${data[i]}" alt="User post gallery picture">
                            </div>`;
        }
    }

    return `<div class="gallery gallery-${visiblePhotoCount}">
                ${imagesHTML}
            </div>`;
}

export default renderContentGallery;