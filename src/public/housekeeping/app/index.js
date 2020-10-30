// let events = [];
//
//
// document.addEventListener("DOMContentLoaded", () => {
//     const calendar_element = document.getElementById('calendar');
//
//     const options = {
//         locale: 'fr',
//         initialView: 'timeGridWeek',
//         buttonText: {
//             today: "Aujourd\'hui"
//         },
//         header: {
//             center: 'addEventButton'
//         },
//         customButtons: {
//             addEventButton: {
//                 text: 'Ajouter une permanence',
//                 click: () => {
//                     let author = prompt('A quel nom ?');
//                     let datestr = prompt('A quel moment ? (YYYY-MM-DD HH:ii) ex: 2020-30-10 10:30');
//                     let date = moment(datestr);
//                     if (date.isValid()) {
//                         calendar_event.renderEvent({
//                             "title": "test",
//                             "start": "2020-10-30 08:40:00",
//                             "end": "2020-10-30 08:45:00",
//                             "backgroundColor": "#1b1b1b"
//                         });
//                     }else{
//                         prompt("Format de date invalide");
//                     }
//                 }
//             }
//         },
//         events: events,
//         nowIndicator: true
//     }
//     let calendar_event = $('#calendar').fullCalendar(options);
//
//     calendar_event.render();
// });

// function NewPermanence() {
//     const today = Date.now();
//
//     events.push({
//         "title": "Permanence par Joffrey",
//         "start": `${today}`,
//         "end": `${today}`,
//         "backgroundColor": "#FF0000"
//     });
//     $('#calendar').fullCalendar('refetchEvents');
// }

// let events = [];
//
// $(function () {
//     const options = {
//         locale: 'fr',
//         initialView: 'timeGridWeek',
//         buttonText: {
//             today: "Aujourd\'hui"
//         },
//         header: {
//             center: 'addEventButton'
//         },
//         customButtons: {
//             addEventButton: {
//                 text: 'Ajouter une permanence',
//                 click: () => {
//                     let author = prompt('A quel nom ?');
//                     let datestr = prompt('A quel moment ? (YYYY-MM-DD HH:ii) ex: 2020-30-10 10:30');
//                     let date = moment(datestr);
//                     if (date.isValid()) {
//                         calendar_event.renderEvent({
//                             "title": "test",
//                             "start": "2020-10-30 08:40:00",
//                             "end": "2020-10-30 08:45:00",
//                             "backgroundColor": "#1b1b1b"
//                         });
//                         console.log("hey");
//                     }else{
//                         alert("Format de date invalide");
//                     }
//                 }
//             }
//         },
//         events: events,
//         nowIndicator: true
//     }
//     $('#calendar').fullCalendar();
// });

document.addEventListener('DOMContentLoaded', () => {
    let calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
        initialView: 'timeGridWeek',
        locale: 'fr',
        header: {
            center: 'addEventButton'
        }
    });
    calendar.render();
});
