const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "2002, May, 12",
        area: 29670,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Nuku'alofa Tonga",
        location: "Nuku'alofa, Tonga",
        dedicated: "2006, November, 12",
        area: 18256,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nuku'alofa-tonga-temple/nuku'alofa-tonga-temple-12094-main.jpg"
    },
    {
        templeName: "Calgary Alberta",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, November, 11",
        area: 26300,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-13199-main.jpg"
    }
];

function generateTempleCards(templesArray) {
    const gallery = document.getElementById('temple-gallery');
    gallery.innerHTML = '';

    templesArray.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} Temple`;
        templeImage.loading = 'lazy';

        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;

        const templeDedicated = document.createElement('p');
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area} sq ft`;

        templeCard.appendChild(templeImage);
        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedicated);
        templeCard.appendChild(templeArea);

        gallery.appendChild(templeCard);
    });
}

function filterTemples(filterType) {
    let filteredTemples = [];
    switch (filterType) {
        case "old":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;
        case "new":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case "home":
        default:
            filteredTemples = temples;
            break;
    }
    generateTempleCards(filteredTemples);
}

document.getElementById('home').addEventListener('click', () => filterTemples('home'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));

document.addEventListener('DOMContentLoaded', () => {
    generateTempleCards(temples);

    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
    document.getElementById('last-modified').textContent = document.lastModified;
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.querySelector("nav ul");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
