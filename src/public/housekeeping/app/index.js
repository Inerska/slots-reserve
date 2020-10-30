let calendar;
let events = [];

document.addEventListener('DOMContentLoaded', () => {
    const calendar_element = document.getElementById('calendar');
    const perm_button = document.getElementById('perm_val');

    perm_button.addEventListener('click', NewPermanence);

    calendar = new FullCalendar.Calendar(calendar_element, {
        initialView: 'timeGridWeek',
        locale: 'fr',
        events: events,
        nowIndicator: true
    });
    calendar.render();
});


function NewPermanence() {
    const calendar_element = document.getElementById('calendar');
    const author = prompt("À quel nom ?");
    const start_date = moment(prompt("Début (DD/MM/YYYY HH:mm) Exemple: 30/10/2020 21:00"), "DD/MM/YYYY HH:mm").format("YYYY-MM-DD HH:mm");
    const end_date = moment(prompt("Fin (DD/MM/YYYY HH:mm) Exemple: 30/10/2020 22:00"), "DD/MM/YYYY HH:mm").format("YYYY-MM-DD HH:mm");

    events.push({
        "title": `Permanence par ${author}`,
        "start": start_date,
        "end": end_date,
        "display": "background"
    });
    calendar.destroy();
    calendar = new FullCalendar.Calendar(calendar_element, {
        initialView: 'timeGridWeek',
        locale: 'fr',
        events: events,
        nowIndicator: true
    });
    calendar.render();
    $.post({
        type: "POST",
        contentType: "json",
        url: "../../model/post-permanence.php",
        data: {
            "author": author,
            "start": start_date,
            "end": end_date,
        },
        headers: {
            'Content-Type': 'application/json',
            'charset': 'utf-8'
        }
    });
}