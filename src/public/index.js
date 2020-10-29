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


// Are inputs null
function areInputsNull() {
    let isnull = false;
    [$('#firstname'), $('#lastname'), $('#mail'), $('#phone-number')].forEach(input => {
        if (input.val().length === 0) {
            GetTipErrorMessage(input);
            isnull = true;
        }
    });
    return isnull;
}

// Just set error message under the user inputs when the inputs are null
function GetTipErrorMessage(element) {
    const parent = element.parent();
    const tip = parent.children('.under_input');

    tip.html("<i class=\"fas fa-exclamation-circle\"></i> Ce champs doit être renseigné.");
}

function send_ajax() {
    if(!areInputsNull()){
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
}