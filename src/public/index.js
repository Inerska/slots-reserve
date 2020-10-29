document.addEventListener("DOMContentLoaded", () => {
    const reserv_btn = document.querySelector("#form_validate");

    reserv_btn.addEventListener('click', send_ajax);


    // Calendar instance
    $(".calendario").flatpickr({
        enableTime: true,
        minTime: "08:00",
        maxTime: "18:00",
        dateFormat: "Y-m-d H:i"
    });
});

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
function send_ajax() {
    $.post({
        type: "POST",
        contentType: "json",
        url: "../model/post-reservation.php",
        data: {
            prename: $('#firstname').val(),
            name: $('#lastname').val(),
            mail: $('#mail').val(),
            phone: $('#phone-number').val(),
            activity: $('#activity').text(),
            date: $('.calendario').val(),
            bapteme: $('#bapteme').val()
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
}