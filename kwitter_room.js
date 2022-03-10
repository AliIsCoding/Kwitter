const firebaseConfig = {
  apiKey: "AIzaSyA_iUw-dbh10Vj6nr1tBxg81z_2T5-Plcs",
  authDomain: "kwitter-final-3b19f.firebaseapp.com",
  databaseURL: "https://kwitter-final-3b19f-default-rtdb.firebaseio.com",
  projectId: "kwitter-final-3b19f",
  storageBucket: "kwitter-final-3b19f.appspot.com",
  messagingSenderId: "1020432682703",
  appId: "1:1020432682703:web:11b9f72fb668ff2b6ef1ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  








  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
