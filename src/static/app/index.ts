// On document fully loaded
document.addEventListener("DOMContentLoaded", ()=>{
    const btn_housekeeping = document.getElementById("housekeeping-enter");

    btn_housekeeping.addEventListener("click", ()=>{
        location.href = "/housekeeping";
    });
});