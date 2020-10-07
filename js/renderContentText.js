/*
Teksto apimtys:
- mazai: 1-60
- vidutiniskai: 61-300
- daug: 301-10000
*/

function renderContentText(text, background) {
    // validacija
    if (!text) {
        console.error('ERROR: posto tekstui nedave reiksmes, bet bando spausdinti.');
        return '';
    }

    // logika
    if (text.length < 61) {
        let bgClass = '';
        if (background) {
            bgClass = 'background ' + background;
        }
        return `<p class="big-size ${bgClass}">${text}</p>`;
    } else if (text.length < 301) {
        return `<p>${text}</p>`;
    } else {
        let shortedText = '';
        for (let i = 0; i < 300; i++) {
            shortedText += text[i];
        }
        return `<p>${shortedText}... <span class="more">See more</span></p>
                <p class="hidden">${text} <span class="less">See less</span></p>`;
    }
}

export default renderContentText;