document.addEventListener("DOMContentLoaded", () => {
    const reserv_btn = document.querySelector("#form_validate");

    reserv_btn.addEventListener('click', areInputsNull);


    // Calendar instance
    $(".calendario").flatpickr({
        enableTime: true,
        minTime: "08:00",
        maxTime: "18:00",
        dateFormat: "Y-m-d H:i"
    });
});


// Are inputs null
function areInputsNull() {
    [$('#firstname'), $('#lastname'), $('#mail'), $('#phone-number')].forEach(input => {
        if (input.val().length === 0) {
            GetTipErrorMessage(input);
        }
    });
}

function GetTipErrorMessage(element) {
    const parent = element.parent();
    const tip = parent.children('.under_input');

    tip.html("<i class=\"fas fa-exclamation-circle\"></i> Ce champs doit être renseigné.");
}

function send_ajax() {
    areInputsNull();
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