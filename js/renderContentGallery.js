function renderContentGallery(data) {
    // validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija, reikia duoti tinkama informacija');
        return '';
    }

    // logika
    const maxGallerySize = 2;
    const totalPhotosCount = data.length;
    const visiblePhotoCount = totalPhotosCount > maxGallerySize ? maxGallerySize : totalPhotosCount;

    let imagesHTML = '';
    for (let i = 0; i < visiblePhotoCount; i++) {
        imagesHTML += `<img src="./img/posts/${data[i]}" alt="User post gallery picture">`;
    }

    let extraHTML = '';
    if (totalPhotosCount > maxGallerySize) {
        extraHTML = `<div class="extra">+${totalPhotosCount - maxGallerySize}</div>`;
    }

    return `<div class="gallery gallery-${visiblePhotoCount}">
                ${imagesHTML}
                ${extraHTML}
            </div>`;
}

export default renderContentGallery;