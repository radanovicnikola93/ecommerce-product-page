const mainImage = document.getElementById('main-image');
const modal = document.getElementById('modal-images');

// open modal
mainImage.addEventListener('click', () => modal.classList.add('modal-active'));

// hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('modal-active') : false);