import {Doctor} from "./../js/doctor.js"

$(document).ready(function(){

 let doctorObj = new Doctor();
 doctorObj.getConditions();
 doctorObj.getDoctorByName();

 $(".doctorName").click(function(){
 let name = $('.searchName').val();
 try {
   if(name == "non"){
     throw("Please enter a name");
   }
   else{
     $('.searchPage').addClass('hide');
     doctorObj.getDoctorByName(name);
     console.log(doctorObj.getDoctorByName(name));
   }
 } catch (e) {
   $(".searchPage").prepend(`<div class="alert alert-warning alert-dismissable fade in">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  ${e}
</div>`);
}
});

 $(".findDoc").click(function(){
   let condition = $('.conditionList').val();
   try {
     if(condition == "non"){
       throw("Please choose a condition");
     }
     else{
       $('.searchPage').addClass('hide');
       doctorObj.getDoctorList(condition);
       console.log(doctorObj.getDoctorList(condition));
     }
   } catch (e) {
     $(".searchPage").prepend(`<div class="alert alert-warning alert-dismissable fade in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    ${e}
  </div>`);
  }
 });
});

// var apiKey = require('./../.env').apiKey;

//Promise version not working
// $(document).ready(function() {
//   $('#searchSymptom').click(function() {
//     let symptom = $('#symptom').val();
//     $('#symptom').val("");
//
//       let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=47.606%2C-122.332%2C100&user_location=47.606%2C-122.332&sort=distance-asc&skip=0&limit=10&user_key=${apiKey}`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     promise.then(function(response) {
//       let body = JSON.parse(response);
//       body.forEach(function(doctor) {
//       $('.showDoctors').append(`${doctor.profile.first_name}`+" "+`${doctor.profile.last_name}`+"<br>");
//       });
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//     });
//   });
// });


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
//
// $(document).ready(function() {
//   $('#searchName').click(function() {
//     let name = $('#doctorName').val();
//     $('#doctorName').val("");
//     $.ajax({
//       url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=47.606%2C-122.332%2C100&user_location=47.606%2C-122.332&sort=distance-asc&skip=0&limit=10&user_key=${apiKey}`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         response.data.forEach(function(doctor) {
//         $('.showDoctors').append(`${doctor.profile.first_name}`+" "+`${doctor.profile.last_name};
          // data.practices.forEach(function(data) {
          //   $('.showDetail').append( `${doctor.visit_address}`+"<br>"+`${doctor.phones}`+"<br>"+ `${doctor.website}`+"<br>"+`"Accepting new patients:"${doctor.accepts_new_patients}`+"<br>");
//       });
        // });
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.")
//       }
//     });
//   });
// });
