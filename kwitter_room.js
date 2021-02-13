
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyAl0OI9UFzL3nzpBhjemQAgjRg6zGIBSDo",
      authDomain: "social-website-b4d9a.firebaseapp.com",
      projectId: "social-website-b4d9a",
      storageBucket: "social-website-b4d9a.appspot.com",
      messagingSenderId: "877211760244",
      appId: "1:877211760244:web:7b5670e870ff416585c321",
      measurementId: "G-WQH3FL25RY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function room()
{
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      window.location = "https://code.whitehatjr.com/s/dashboard";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
