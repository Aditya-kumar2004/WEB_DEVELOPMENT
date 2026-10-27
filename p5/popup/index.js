const modalOverlay = document.getElementById('modalOverlay');

function toggleModal() {
  modalOverlay.classList.toggle('hidden');
}

// Event Listeners
document.getElementById('openModalBtn')?.addEventListener('click', toggleModal);
document.getElementById('closeModalBtn')?.addEventListener('click', toggleModal);
