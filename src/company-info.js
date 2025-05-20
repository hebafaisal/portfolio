document.addEventListener('DOMContentLoaded', () => {
    const visitButtons = document.querySelectorAll('.visit-btn');
    const closeButtons = document.querySelectorAll('.close-modal');
    let activeModal = null;

    const openModal = (modal) => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        activeModal = modal;
    };

    const closeModal = () => {
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.classList.remove('modal-open');
            activeModal = null;
        }
    };

    // Open modal
    visitButtons.forEach(button => {
        button.addEventListener('click', () => {
            const company = button.getAttribute('data-company');
            const modal = document.getElementById(`${company}-modal`);
            openModal(modal);
        });
    });

    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (activeModal && !e.target.closest('.modal-card') && !e.target.closest('.visit-btn')) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeModal) {
            closeModal();
        }
    });
});
