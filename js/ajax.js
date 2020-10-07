function ajax(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "https://front-end-by-rimantas.github.io/18b-grupe-facebook/js/data.json", true);
    xhttp.send();
}

export default ajax;