//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5MTE3MTQxLCJleHAiOjE2NTkxMjA3NDEsIm5iZiI6MTY1OTExNzE0MSwianRpIjoiYjhNSHFSM0psRkU1T3JpcCIsInN1YiI6ODMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.zzNktV9U3eVidZr6Yb5U5qLp4eNDh3K3G8VSvYv9nYc"; // put access token
const student = {
  name: 'Akkarat Subsri', // replace with your full name.
  age: 19, // put your age.
  gender: 'male', // replace with your gender
  department: 'CPE',
  studentcode: '63367568'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}