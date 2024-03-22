// uses EmailJS                    www.emailjs.com
// Initialize EmailJS user ID
emailjs.init("PHl0QftQP_tfIeF6N");

const sendBtn = document.getElementById("sendEmail");
const emailForm = document.getElementById("email");

const sendEmail = () => {
  const email = document.getElementById("email").value;
  const sendFrom = document.getElementById("sendFrom").value;
  const sendTo = document.getElementById("sendTo").value;
  const msg = "This is a test message. Hello World!"
  if (
    sendFrom &&
    sendTo &&
    email
  ) {
    emailjs
      .send("service_skg63xk", "template_i8yav5k", {
        to_email: email,
        subject_from_name: sendFrom,
        to_name: sendTo,
        user_name: sendFrom,
        message: msg,
      })
      .then(
        function (response) {
          // Show Bootstrap alert
          const alertSuccess = document.getElementById("alertSuccess");
          alertSuccess.style.display = "block";
          // Hide after 5 seconds
          setTimeout(() => {
            alertSuccess.style.display = "none";
          }, 2500);
        },
        function (error) {
          alert("Failed to send the email.");
        }
      );
  } else {
    alert(
      "Please fill in all the fields first. Thanks! Have a happy day :)"
    );
  }
};

const handleEnterKey = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("sendEmail").click();
  }
};

if (sendBtn && emailForm) {
  sendBtn.addEventListener("click", sendEmail);
  emailForm.addEventListener("keydown", handleEnterKey);
}

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