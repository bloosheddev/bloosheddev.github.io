const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla2hoZmpqdXdxdnVvcnR4b3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MDQwNjksImV4cCI6MjA0NDQ4MDA2OX0.-YEmIcPDyA8YY4W5WzVy9tCwGK_TRP1U0gvQuSd3il0";
const url = "https://bekhhfjjuwqvuortxosz.supabase.co";
const database = supabase.createClient(url, key);

const sendData = async () => {
    var textinput = document.getElementById('textinput').value/*.split('\n')*/
    if (textinput != '') {

        const d = new Date();
        const formattedTime = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} | ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()},${d.getMilliseconds()}`
        const databaseTitle = formattedTime + " | " + textinput[0]

        let res = await database.from("testing").insert({
            textinput : textinput,
            readed : false
        })
    
        document.getElementById('textinput').value = ''
        alert("Successfully Sent The Message!")
    }
}