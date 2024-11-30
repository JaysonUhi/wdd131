document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[loading='lazy']");

    const lazyLoad = (img) => {
        img.src = img.dataset.src;
        img.onload = () => img.removeAttribute("data-src");
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach((img) => observer.observe(img));
});
