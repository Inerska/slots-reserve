// On document fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const btn_housekeeping = document.getElementById("housekeeping-enter");
    const btn_formvalidate = document.getElementById("validate_form");
    const modal_delete = document.querySelector(".delete");
    const modal = document.getElementById("creneaux-modal");
    const modal_cancel = document.getElementById("modal-cancel");
    const modal_validation = document.getElementById("modal-validate");
    [modal_cancel, modal_validation, modal_delete].forEach(selector => {
        selector.addEventListener("click", e => {
            e.preventDefault();
            modal.classList.toggle("is-active");
            document.getElementsByTagName("html")[0].classList.toggle("is-clipping");
        });
    });
    btn_housekeeping.addEventListener("click", () => {
        location.href = "/housekeeping";
    });
    btn_formvalidate.addEventListener("click", () => {
        const prename = $('#prename').val();
        const name = $('#lastname').val();
        const phone = $('#phone').val();
        if (prename != "" || name != "" || phone != "") {
            let request = $.post({
                type: "POST",
                contentType: "json",
                url: "../model/post-reservation.php",
                data: {
                    prename: prename,
                    name: name,
                    phone: phone
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            modal.classList.toggle("is-active");
            document.getElementsByTagName("html")[0].classList.toggle("is-clipping");
        }
        else {
            alert("Nah, c'est vide mec");
        }
    });
});
//# sourceMappingURL=index.js.map