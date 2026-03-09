const openButtons = document.querySelectorAll('[data-modal-open]');
const closeButtons = document.querySelectorAll('[data-modal-close]');

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modalOpen;

    const modal = document.querySelector(`[data-modal="${modalId}"]`);

    modal.classList.add('is-open');
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('[data-modal]');

    modal.classList.remove('is-open');
  });
});

console.log('modal js loaded');
