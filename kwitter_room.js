var firebaseConfig = {
    apiKey: "AIzaSyDMQ85rzqjsKnVfsq-SaLiCPnN0FvesQJ0",
    authDomain: "kwitter-c5732.firebaseapp.com",
    databaseURL: "https://kwitter-c5732-default-rtdb.firebaseio.com",
    projectId: "kwitter-c5732",
    storageBucket: "kwitter-c5732.appspot.com",
    messagingSenderId: "645207593563",
    appId: "1:645207593563:web:9adf306254ea00d8ca257e",
    measurementId: "G-KNG8WNHNKZ"
};

  
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    windows.location = "kwitter_page.html"
  }

function getData() {
  firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;
  Room_names = childKey;
  console.log("Room name-"+Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML+= arow;  
  });
});
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}


