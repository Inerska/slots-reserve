document.addEventListener("DOMContentLoaded", () => {
    const reserv_btn = document.querySelector(".modal-open");
    const modal = document.querySelector(".modal");
    const close_modal = document.querySelectorAll('.modal-close');

    // Event dispatcher
    reserv_btn.addEventListener('click', evt => toggleModal(evt));

    for (let i = 0; i < close_modal.length; i++) {
        close_modal[i].addEventListener('click', evt => toggleModal(evt));
    }


    // Calendar instance
    $(".calendario").flatpickr({
        enableTime: true,
        minTime: "08:00",
        maxTime: "18:00",
        dateFormat: "Y-m-d H:i"
    });
});

// Toggle the modal passing the event instance
function toggleModal(event) {
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body');

    event.preventDefault();
    modal.classList.toggle('opacity-0');
    modal.classList.toggle('pointer-events-none');
    body.classList.toggle('modal-active');
}
