const currentDate = document.getElementById("currentDate");

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
currentDate.value = `${day}/${month}/${year}`;

const kidsContent = document.getElementById("kids");

function getAge(e) {
  var today = new Date();
  var birthDate = new Date(e.detail.endDate);
  var age = today.getFullYear() - birthDate.getFullYear();

  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 18) {
    kidsContent.style = "display: block";
  }
}
window.addEventListener("apply.daterangepicker", getAge);

const ahvNumber = document.getElementById("ahvNumber");
const ahvValidation = (e) => {
  let regex = /[\d]{3}[.][\d]{4}[.][\d]{4}[.][\d]{2}$/;
  let regex2 = /[\d]{3}[.][\d]{4}[.][\d]{4}[.][\d]{3}$/;
  if (regex.test(ahvNumber.value) || regex2.test(ahvNumber.value)) {
    document.getElementById("ahvError").style = "display: none";
  } else {
    document.getElementById("ahvError").style = "display: block";
  }
};
ahvNumber.onchange = ahvValidation;
