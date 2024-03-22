// uses EmailJS                    www.emailjs.com
// Initialize EmailJS user ID
emailjs.init("PHl0QftQP_tfIeF6N");

document.getElementById("email").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the default form submission
  
  console.log('Attempting to send email');
  const sendTo = document.getElementById("exampleInputEmail1").value;
  console.log(sendTo);
  
  const sendFrom = document.getElementById("nameInput").value;
  console.log(sendFrom);
  
  const msg = document.getElementById("message").value;
  console.log(msg);
  
  if (sendFrom && sendTo) {
    emailjs.send("service_skg63xk", "template_i8yav5k", {
      to_email: sendTo,
      subject_from_name: sendFrom,
      to_name: sendTo,
      from_name: sendFrom,
      message: msg,
    })
    .then(function(response) {
      // SUCCESS
      console.log('SUCCESS!', response.status, response.text);
      // Show alert
      const alertSuccess = document.getElementById("alertSuccess");
      alertSuccess.classList.remove("d-none");
      // Automatically hide >5 seconds
      setTimeout(() => {
        alertSuccess.classList.add("d-none");
      }, 5000);

      // Reset the form
      document.getElementById("email").reset();
    }, function(error) {
      // FAILED
      console.log('FAILED...', error);
      const alertFail = document.getElementById("alertFail");
      alertFail.classList.remove("d-none");
      // Automatically hide >5 seconds
      setTimeout(() => {
        alertFail.classList.add("d-none");
      }, 5000);
    });
  } else {
    const alertValidate = document.getElementById("alertValidate");
      alertValidate.classList.remove("d-none");
      // Automatically hide >5 seconds
      setTimeout(() => {
        alertValidate.classList.add("d-none");
      }, 5000);
  }
});

const handleEnterKey = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("sendEmail").click();
  }
};


// handle email form emojis
document.getElementById('emojiSlider').addEventListener('input', function() {
  var value = this.value;
  var newSrc = `assets/images/emojis/emoji${value}.png`;
  document.getElementById('emojiImage').src = newSrc;
});

// adjust the value of 20 if more emojis are added
document.getElementById('randomButton').addEventListener('click', function() {
  var randomValue = Math.floor(Math.random() * 20) + 1;
  document.getElementById('emojiSlider').value = randomValue;
  var newSrc = `assets/images/emojis/emoji${randomValue}.png`;
  document.getElementById('emojiImage').src = newSrc;
});