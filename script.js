// script.js
document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const loadMoreButton = document.querySelector('.load-more');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('#modal-img');
    const closeModal = document.querySelector('.close');
    const introContent = document.querySelector('.intro-content');

    const images = [
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        // img path
    ];

    let imagesLoaded = 0;
    const imagesToLoad = 10; 

    const loadImages = () => {
        for (let i = 0; i < imagesToLoad; i++) {
            if (imagesLoaded < images.length) {
                const img = document.createElement('img');
                img.src = images[imagesLoaded];
                img.alt = `Portfolio Image ${imagesLoaded + 1}`;
                img.className = 'portfolio-image';
                img.addEventListener('click', () => {
                    modal.style.display = 'block';
                    modalImg.src = img.src;
                });
                portfolioGrid.appendChild(img);
                imagesLoaded++;
            } else {
                loadMoreButton.style.display = 'none';
                break;
            }
        }
    };

    loadMoreButton.addEventListener('click', loadImages);

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    loadImages();

    setTimeout(() => {
        introContent.style.transform = 'translateX(0)';
        introContent.style.opacity = '1';
    }, 500);
});
