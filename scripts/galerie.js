document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', () => {
        if (lightbox.contains(event.target.firstChild)) {
            return;
        }
        lightbox.classList.remove('active');
    });
});
