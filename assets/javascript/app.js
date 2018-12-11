$(document).ready(function() {

  //variable that obtains the current time
  var currentTime = new moment().format("HH:mm");
  console.log(currentTime);

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

  // database.ref().on("value", function(snapshot) {
    // var sv = snapshot.val();
    // console.table(sv);

    // var name = $("<td>").text(sv.name);
    // var destination = $("<td>").text(sv.destination);
    // // var time = $("<td>").text(sv.time);
    // var frequency = $("<td>").text(sv.frequency);
    // var nextArrival = $("<td>").text("12:15");
    // var minutesAway = $("<td>").text("15");
    // var newRow = $("<tr>");

    // $("tbody").append(newRow);
    // newRow.append(name);
    // newRow.append(destination);
    // newRow.append(time);
    // newRow.append(frequency);
    // newRow.append(nextArrival);
    // newRow.append(minutesAway);
  // })


  // capture the click
  $(".btn").on("click", function(event){

    event.preventDefault();

    database.ref().push({
      //assign variables to each input field on the DOM
      //create variable that captures the user’s input with .val.trim 
      name: $("#train-input").val().trim(),
      destination: $("#destination-input").val().trim(),
      time: $("#time-input").val().trim(),
      frequency: $("#frequency-input").val().trim(),
      nextArrival: "12:00",
      minutesAway: "15",
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

    $("#train-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
     
  })

  database.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {

    var sv = snapshot.val();
    console.table(sv);

    var name = $("<td>").text(sv.name);
    var destination = $("<td>").text(sv.destination);
    // var time = $("<td>").text(sv.time);
    var frequency = $("<td>").text(sv.frequency);
    var nextArrival = $("<td>").text("12:15");
    var minutesAway = $("<td>").text("15");
    var newRow = $("<tr>");

    // dynamically add a new table row
    $("tbody").append(newRow);
    newRow.append(name);
    newRow.append(destination);
    // newRow.append(time);
    newRow.append(frequency);
    newRow.append(nextArrival);
    newRow.append(minutesAway);
  });
});
