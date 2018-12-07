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

});
