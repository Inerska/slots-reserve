import {provide_click} from "./Entity/provide_extender";

$(document).on('ready', () => {

    // Following snake-case naming convention
    const provide_button = $('.modal-open');
    const calendar = $('.calendario');

    // Event dispatcher
    provide_button.on('click', provide_click);

    // Calendar instance
    calendar.flatpickr({
        enableTime: true,
        minTime: "08:00",
        maxTime: "18:00",
        dateFormat: "Y-m-d H:i"
    });
});