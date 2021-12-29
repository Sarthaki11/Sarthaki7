
var firebaseConfig = {
      apiKey: "AIzaSyA5Dg9h0M1SqNX9W-bAUTp6d9NM-04x3tA",
      authDomain: "kwitter-c1266.firebaseapp.com",
      databaseURL: "https://kwitter-c1266-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1266",
      storageBucket: "kwitter-c1266.appspot.com",
      messagingSenderId: "755505143792",
      appId: "1:755505143792:web:45b53bd4faafeef058c735",
    };
    
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME" + user_name + "!";

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}