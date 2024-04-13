function rules() {
    const rulesPage = document.querySelector('.rules-page');
    if (rulesPage.style.display == 'none') {
        rulesPage.style.display = 'flex'
    } else {
        rulesPage.style.display = 'none'
    }
}
function send_answer() {
    const popupConfirmation = document.querySelector('.popupConfirmation');
    popupConfirmation.style.display = 'flex'
}
function no() {
    const popupConfirmation = document.querySelector('.popupConfirmation');
    if (popupConfirmation.style.display == 'none') {
        popupConfirmation.style.display = 'flex'
    } else {
        popupConfirmation.style.display = 'none'
    }
}
function send() {
    
}