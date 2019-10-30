// Config object includes API key
import { config } from './module.js';
$(document).ready(function() {
  // Initialize Firebase

  /*
  var config = {
    apiKey: 'AIzaSyAkqmTYGaYTUcriK4W2SBNhCQ3Oo3AEtis',
    authDomain: 'codewithangel.firebaseapp.com',
    databaseURL: 'https://codewithangel.firebaseio.com',
    projectId: 'codewithangel',
    storageBucket: 'clickbutton-8c8df.appspot.com',
    messagingSenderId: '891764995285'
  };
  */
  firebase.initializeApp(config);

  // Variables
  // Get a reference to the database service
  var database = firebase.database();

  //Adding trains
  $('#addtrain-button').on('click', function(event) {
    event.preventDefault();

    // Grab user input
    var name = $('#train-input')
      .val()
      .trim();
    var dest = $('#dest-input')
      .val()
      .trim();
    var firstTrain = $('#firstTrain-input')
      .val()
      .trim();
    var freq = $('#freq-input')
      .val()
      .trim();

    // Getting a local "Temporary" object that holding data
    var newTrain = {
      name: trainName,
      destination: trainDest,
      start: firstTrain,
      frequency: trainFreq
    };
    // Uploading train data to database
    database.ref().push(newTrain);

    // Alert
    alert('Train successfully added');

    // Clears all of the text-boxes
    $('#train-name=input').val('');
    $('#dest-input').val('');
    $('#firstTrain-input').val('');
    $('#freq-input').val('');
  });

  database.ref().on('child_added', function(childSnapshot, prevChildkey) {
    console.log(childSnapshot.val());

    // variable

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().dest;
    var firstTrain = childSnapshot.val().start;
    var trainFreq = childSnapshot.val().freq;

    //Declaring Variable
    var trainFreq;

    // Time
    var firstTime = 0;

    var firstTimeConverted = moment(firstTime, 'HH:mm').subtract(1, 'years');
    console.log(firstTimeConverted);

    //Current Time
    var currentTime = moment();
    console.log('current time:' + moment(currentTime).format('HH:mm'));

    //Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), 'minutes');
    console.log('DIFFERENCE IN TIME:' + diffTime);

    // Time apart(remainder)
    var tRemainder = diffTime % trainFreq;
    console.log(tRemainder);

    //Minute until train
    var tMinutesTillTrain = trainFreq - tRemainder;
    console.log('Minutes till train arrived:' + tMinutesTillTrain);

    //Next Train
    var nextTrain = moment().add(tMinutesTillTrain, 'minutes');
    console.log('Arrival Time:' + moment(nextTrain).format('hh:mm'));

    //adding trains data into the table
    $('#train-table>tbody').append(
      '<tr><td>' +
        trainName +
        '</td><td>' +
        trainDest +
        '</td><td>' +
        trainFreq +
        '</td><td>' +
        moment(nextTrain).format('HH:mm') +
        '</td><td>' +
        tMinutesTillTrain +
        '</td></td>'
    );
  });
});
