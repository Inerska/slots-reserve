// On document fully loaded
document.addEventListener("DOMContentLoaded", () => {
    $(".calendario").flatpickr({
        minDate: "today",
        maxDate: new Date().fp_incr(30),
        enableTime: true,
        minTime: "08:00",
        maxTime: "18:00",
        dateFormat: "Y-m-d H:i"
    });


    const btn_housekeeping = document.getElementById("housekeeping-enter");
    const btn_formvalidate = document.getElementById("validate_form");
    const modal_delete = document.querySelector(".delete");
    const modal = document.getElementById("creneaux-modal");
    const modal_cancel = document.getElementById("modal-cancel");
    const modal_validation = document.getElementById("modal-validate");

    [modal_cancel, modal_validation, modal_delete, btn_formvalidate].forEach(selector => {
        selector.addEventListener("click", e => {
            e.preventDefault();
            modal.classList.toggle("is-active");
            document.getElementsByTagName("html")[0].classList.toggle("is-clipping");
        });
    });
    btn_housekeeping.addEventListener("click", () => {
        location.href = "housekeeping";
    });
    btn_formvalidate.addEventListener("click", e => {
        const rValuesIDName = [
            'prename',
            'lastname',
            'phone'
        ];
        const fieldValuesClassName = [
            'field-prename',
            'field-name',
            'field-phone'
        ];

        for (let it = 0; it < rValuesIDName.length; ++it) {
            errorIfNULLValue(rValuesIDName[it], fieldValuesClassName[it], false, true);
        }
        // let request = $.post({
        //     type: "POST",
        //     contentType: "json",
        //     url: "../model/post-reservation.php",
        //     data: {
        //         prename: prename,
        //         name: name,
        //         phone: phone
        //     },
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
    });
});


function errorIfNULLValue(rvalue, field, isRValClass = false, isFieldClass = false) {
    let idSelector = $(isRValClass ? `.${rvalue}` : `#${rvalue}`);
    let fieldSelector = $(isFieldClass ? `.${field}` : `#${field}`);

    if (!idSelector.val()) {
        fieldSelector.append($("<p class='help is-danger'>Le champ ne peut être vide.</p>"));
    }
}
