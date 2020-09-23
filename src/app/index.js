// On document fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Hey 1");
    var btn_housekeeping = document.getElementById("housekeeping-enter");
    btn_housekeeping.addEventListener("click", function () {
        location.href = "/src/static/housekeeping/";
        console.log("hey");
    });
});
