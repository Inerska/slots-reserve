const events = [{
    "title": "Something",
    "start": "2020-10-30 08:40:00",
    "end": "2020-10-30 08:40:00",
    "backgroundColor": "#1b1b1b"
}]


document.addEventListener("DOMContentLoaded", () => {
    let calendar_element = document.getElementById('calendar');

    const options = {
        locale: 'fr',
        initialView: 'timeGridWeek',
        buttonText: {
            today: "Aujourd\'hui"
        },
        events: events,
        nowIndicator: true
    }
    let calendar_event = new FullCalendar.Calendar(calendar_element, options);

    calendar_event.render();
});