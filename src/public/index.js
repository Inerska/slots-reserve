document.addEventListener("DOMContentLoaded", () => {
    const reserv_btn = document.querySelector(".modal-open");
    const modal = document.querySelector(".modal");

    // Event dispatcher
    reserv_btn.addEventListener("click", evt => toggleModal(evt));

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
    const modal = document.querySelector('.modal')

    event.preventDefault();
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    $('body').classList.toggle('modal-active')
}
