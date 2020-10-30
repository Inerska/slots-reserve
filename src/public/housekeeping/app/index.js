let calendar;
let events = [];


document.addEventListener('DOMContentLoaded', () => {
    const calendar_element = document.getElementById('calendar');
    const perm_button = document.getElementById('perm_val');

    perm_button.addEventListener('click', NewPermanence);

    calendar = new FullCalendar.Calendar(calendar_element, {
        initialView: 'timeGridWeek',
        locale: 'fr',
        events: events
    });
    calendar.render();
});


function NewPermanence() {
    const today = Date.now();
    const calendar_element = document.getElementById('calendar');

    events.push({
        "title": "Permanence par Jofrey",
        "start": "2020-10-30 08:40:00",
        "end": "2020-10-30 10:45:00",
        "display": "background"
    })
    calendar.destroy();
    calendar = new FullCalendar.Calendar(calendar_element, {
        initialView: 'timeGridWeek',
        locale: 'fr',
        events: events,
        nowIndicator: true
    });
    calendar.render();
}