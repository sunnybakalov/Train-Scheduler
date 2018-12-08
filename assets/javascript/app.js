$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDF-a8rXgtAlEtQ66RgZc732LcRUGaDYY",
    authDomain: "train-scheduler-eab30.firebaseapp.com",
    databaseURL: "https://train-scheduler-eab30.firebaseio.com",
    projectId: "train-scheduler-eab30",
    storageBucket: "train-scheduler-eab30.appspot.com",
    messagingSenderId: "91964813880"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  $(".btn").on("click", function(event){

    event.preventDefault();

    //assign variables to each input field on the DOM

    // capture the click 
    // dynamically add a new table row
      //make sure that the each input field by the user goes into the right column.
    // create variable that captures the user’s input with .val.trim 
    // database.ref().set({})
  })

});
