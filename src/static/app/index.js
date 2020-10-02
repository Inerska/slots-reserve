// On document fully loaded
document.addEventListener("DOMContentLoaded", () => {
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
        location.href = "/housekeeping";
    });
    btn_formvalidate.addEventListener("click", () => {
        alert($('modal-cancel').val());
    });
});
//# sourceMappingURL=index.js.map