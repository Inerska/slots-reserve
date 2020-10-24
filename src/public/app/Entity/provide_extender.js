export function provide_click(event) {

    const modal = document.querySelector('.modal');

    event.preventDefault();
    modal.classList.toggle('opacity-0');
    modal.classList.toggle('pointer-events-none');
    $('body').classList.toggle('modal-active');
}