// const img_1 = document.querySelector('[data-img="product-img-1"]');
// const name = document.querySelector('[data-name="product-name"]');
// const price = document.querySelector('[data-price="product-price"]');
// const title_1 = document.querySelector('[data-title="product-title-1"]');

// const img_2 = document.querySelector('[data-img="product-img-2"]');
// const title_2 = document.querySelector('[data-title="product-title-2"');
const list = document.querySelector('[data-id="list"]');

function DataPr() {
    const requestUrl = "http://www.omdbapi.com/?s=Batman&apikey=4a61d92e";
    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestUrl)
    xhr.onload = () => {
        let object = JSON.parse(xhr.response);
        console.log(object.Search);

        for (let key in object.Search) {
           // console.log(key);
            list.innerHTML += `
            
            <div class="cont cont-setting" data-id="">
                <img src="${object.Search[key].Poster}" data-img="product-img-1" alt="">
                <h4 data-name="product-name"></h4>
                <h3 data-price="product-price"></h3>
                <p class="title">${object.Search[key].Title}</p>
            </div>
            `

        }

    }

    xhr.send();
}
DataPr();
