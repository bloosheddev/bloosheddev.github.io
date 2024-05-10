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

var firebaseConfig = {
    apiKey: "AIzaSyBsfvYCK_gBwI-H364QGj9B-fM2XIer-yI",
    authDomain: "testing-30166.firebaseapp.com",
    databaseURL: "https://testing-30166-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testing-30166",
    storageBucket: "testing-30166.appspot.com",
    messagingSenderId: "92962221541",
    appId: "1:92962221541:web:0de2db4802b3569216d30c"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database()
  
function sendData() {
    var textinput = document.getElementById('textinput').value.split('\n')
    console.log(textinput)
    if (textinput != '') {

        const d = new Date();
        const formattedTime = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} | ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()},${d.getMilliseconds()}`
      
        database.ref(formattedTime + " | " + textinput[0]).set({
            textinput : textinput,
        })
    
        document.getElementById('textinput').value = ''
        document.querySelector('.popupConfirmation').style.display = 'none'

    }
}