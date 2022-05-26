

  const firebaseConfig = {
    apiKey: "AIzaSyBhPqG2tAvvukwLuLPJ3hVXw56ZMLn86Rk",
    authDomain: "p94letschat2.firebaseapp.com",
    databaseURL: "https://p94letschat2-default-rtdb.firebaseio.com",
    projectId: "p94letschat2",
    storageBucket: "p94letschat2.appspot.com",
    messagingSenderId: "229290559243",
    appId: "1:229290559243:web:124ac95bb612b6e68f040e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }

  function send(){

firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });

    msg=document.getElementById("msg").value;

    localStorage.removeItem("msg");
  

  }