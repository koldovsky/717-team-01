(function() {

const products = [
    {
        id: "1",
        imageUrl: "img/itinerary-location_bodo.jpeg",
        title: "Bodo",
        price: 2300,
        description: "Unique Fishing Spot in Fascinating Scenery"
    },
    {
        id: "2",
        imageUrl: "img/itinerary-location_lofoten.jpeg",
        title: "Lofoten",
        price: 2400,
        description: "Stunning Place Beyond the Arctic circle"
    },
    {
        id: "3",
        imageUrl: "img/itinerary-location_oslo.jpeg",
        title: "Oslo",
        price: 2500,
        description: "The Capital and Largest City of Norway"
    },
    {
        id: "4",
        imageUrl: "img/itinerary-location_tromso.jpeg",
        title: "Tromso",
        price: 2600,
        description: "Spot for Hunting the Northern Lights"
    },
    {
        id: "5",
        imageUrl: "img/itinerary-location_trondheim.jpeg",
        title: "Trondheim",
        price: 2700,
        description: "The First Capital With the Royal Residence"
    }
];
    function renderProducts (products){
        const productsContainer = document.querySelector('.header__main-product-list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <aside class="header__aside">
            <img width="200" class="header_aside-video" src="${product.imageUrl}" alt="Norway">
            <h3 class="header__aside-h3">Next Trip to ${product.title}</h3>
            <p class="header__aside-offer">$${product.price} | 17 NOV. - 22 NOV.</p>
            <p class="header__aside-offer-discriptions">${product.description}</p>
            <p class="header__aside-read"><a class="header__aside-text" href="#itinerary">Read more &#10230;</a>
            </p>
            </aside>`
        }
    }
    renderProducts(products);
})();