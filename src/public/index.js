document.addEventListener("DOMContentLoaded", () => {
    // const reserv_btn = document.querySelector(".modal-open");
    // const modal = document.querySelector(".modal");
    // const close_modal = document.querySelectorAll('.modal-close');
    // const post_pro = document.querySelector('.post');
    //
    // // Event dispatcher
    // reserv_btn.addEventListener('click', evt => toggleModal(evt));
    // post_pro.addEventListener('click', send_ajax);
    //
    // for (let i = 0; i < close_modal.length; i++) {
    //     close_modal[i].addEventListener('click', evt => toggleModal(evt));
    // }

    // Calendar instance
    $(".calendario").flatpickr({
        enableTime: true,
        minTime: "08:00",
        maxTime: "18:00",
        dateFormat: "Y-m-d H:i"
    });

});
//
// // Toggle the modal passing the event instance
// function toggleModal(event) {
//     if (areInputsNull()) {
//         const modal = document.querySelector('.modal');
//         const body = document.querySelector('body');
//
//         event.preventDefault();
//         modal.classList.toggle('opacity-0');
//         modal.classList.toggle('pointer-events-none');
//         body.classList.toggle('modal-active');
//     } else alert("Veuillez remplir tous les champs disponibles.");
// }
//
//
// // Are inputs null
// function areInputsNull() {
//     let isnull = true;
//     [$('#firstname'), $('#lastname'), $('#mail'), $('#phone-number')].forEach(input => {
//         if (input.val().length === 0) {
//             isnull = false
//         }
//     });
//     return isnull;
// }
//
// function send_ajax() {
//     let request = $.post({
//         type: "POST",
//         contentType: "json",
//         url: "../model/post-reservation.php",
//         data: {
//             prename: $('#firstname').val(),
//             name: $('#lastname').val(),
//             mail: $('#mail').val(),
//             phone: $('#phone-number').val()
//         },
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }