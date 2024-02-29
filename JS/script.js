function replaceName(){
    let name = prompt("siapakah nama anda?", "")
    document.getElementById("ubah-nama").innerHTML = name
}

document.getElementById("tombol"),addEventListener("click", function() {replaceName()})




document.getElementById("send-message-form").addEventListener("click", () => validateform());

function validateform() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value

    if (name == "" || birthdate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang Kosong")
        return false;
    }

    setsenderUI(name, birthdate, gender, messages);

    return false;
}

function setsenderUI(name, birthdate, gender, messages){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}