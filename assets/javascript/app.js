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

    //empties out the inputs after the user submits a new train
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

    var frequency = parseInt(sv.frequency);
    // var nextArrival = $("<td>").text("12:15");
    // var minutesAway = $("<td>").text("15");
    var newRow = $("<tr>");

    var firstTrain = sv.time
    // <td>18:02</td>

    // var firstTrainUnix = moment.unix(firstTrain).format("HH:mm");

    //console.log(firstTrainUnix);

    var firstTrainConverted = moment(firstTrain, "hh:mm").subtract(1, "years");

    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");

    var remainder = diffTime % frequency;

    var howFarAway = frequency - remainder;

    console.log(howFarAway);

    var nextTrain = moment().add(howFarAway, "minutes").format("HH:mm");
    
    console.log(nextTrain, "next train");


    // dynamically add a new table row
    $("tbody").append(newRow);
    newRow.append(name);
    newRow.append(destination);
    // newRow.append(time);
    newRow.append($("<td>").text(frequency));
    newRow.append(nextTrain);
    newRow.append($("<td>").text(howFarAway));
  });
});
