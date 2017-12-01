var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#searchSymptom').click(function() {
    let symptom = $('#symptom').val();
    $('#symptom').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=47.606%2C-122.332%2C100&user_location=47.606%2C-122.332&sort=distance-asc&skip=0&limit=10&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let doctor = JSON.parse(response);
      response.data.forEach(function(doctor) {
      $('.showDoctors').append(`${doctor.profile.first_name}`+" "+`${doctor.profile.last_name}`+"<br>");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
});

// $(document).ready(function() {
//   $('#searchSymptom').click(function() {
//     let symptom = $('#symptom').val();
//     $('#symptom').val("");
//     $.ajax({
//       url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=47.606%2C-122.332%2C100&user_location=47.606%2C-122.332&sort=distance-asc&skip=0&limit=10&user_key=${apiKey}`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         response.data.forEach(function(doctor) {
//         $('.showDoctors').append(`${doctor.profile.first_name}`+" "+`${doctor.profile.last_name}`+"<br>");
//       });
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.")
//       }
//     });
//   });
// });

$(document).ready(function() {
  $('#searchName').click(function() {
    let name = $('#doctorName').val();
    $('#doctorName').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=47.606%2C-122.332%2C100&user_location=47.606%2C-122.332&sort=distance-asc&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        response.data.forEach(function(doctor) {
        $('.showDoctors').append(`${doctor.profile.first_name}`+" "+`${doctor.profile.last_name}`+"<br>"+ `${doctor.visit_address}`+"<br>"+`${doctor.phones}`+"<br>"+ `${doctor.website}`+"<br>"+`"Accepting new patients:"${doctor.accepts_new_patients}`+"<br>");
      });
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
