// On document fully loaded
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Hey 1");
    const btn_housekeeping = document.getElementById("housekeeping-enter");

    btn_housekeeping.addEventListener("click", ()=>{
       location.href = "/housekeeping";
        console.log("hey");
    });
});