const firebaseConfig = {
  apiKey: "AIzaSyBuEBhlMr454wsu7dz3yPwCR0HpSjeHt5U",
  authDomain: "codecamp-eef39.firebaseapp.com",
  databaseURL: "https://codecamp-eef39-default-rtdb.firebaseio.com",
  projectId: "codecamp-eef39",
  storageBucket: "codecamp-eef39.appspot.com",
  messagingSenderId: "94522011789",
  appId: "1:94522011789:web:061afb0aa710383ee832c4",
  measurementId: "G-YET2J49V6R"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
