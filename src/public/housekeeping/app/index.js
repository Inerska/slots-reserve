document.addEventListener("DOMContentLoaded", () => {
    let calendar_element = document.getElementById('calendar');
    const options = {
        locale: 'fr',
        initialView: 'timeGridWeek',
        buttonText: {
            today: "Aujourd\'hui"
        }
    }
    let calendar_event = new FullCalendar.Calendar(calendar_element, options);

    calendar_event.render();
});