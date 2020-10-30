document.addEventListener("DOMContentLoaded", () => {
    let calendar_element = document.getElementById('calendar');
    let calendar_event = new FullCalendar.Calendar(calendar_element);

    calendar_event.render();
});