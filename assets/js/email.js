// uses EmailJS                    www.emailjs.com
// Initialize EmailJS user ID
emailjs.init("PHl0QftQP_tfIeF6N");

document.getElementById("email").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the default form submission
  
  const sendTo = document.getElementById("exampleInputEmail1").value;
  const sendFrom = document.getElementById("nameInput").value;
  const msg = document.getElementById("message").value;
  const temp = sendTo.split("@");
  const recipient = temp[0];
  const happiness = document.getElementById("emojiSlider").value;
  const max = 21;
  const quote = document.getElementById("quote").value;
  console.log(quote)

  if (sendFrom && sendTo) {
    emailjs.send("service_skg63xk", "template_i8yav5k", {
      to_email: sendTo,
      subject_from_name: sendFrom,
      to_name: recipient,
      from_name: sendFrom,
      message: msg,
      happiness_factor: happiness,
      max_happiness: max,
      affirmation: quote,
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
  var newSrc = `assets/images/emojis/e${value}.png`;
  document.getElementById('emojiImage').src = newSrc;
});

// adjust the value of 21 if more emojis are added
document.getElementById('randomButton').addEventListener('click', function() {
  var randomValue = Math.floor(Math.random() * 21) + 1;
  document.getElementById('emojiSlider').value = randomValue;
  var newSrc = `assets/images/emojis/e${randomValue}.png`;
  document.getElementById('emojiImage').src = newSrc;
});


// get random affirmation from JSON list

function fetchRandomAffirmation() {
  fetch('inspire.json')
    .then(response => response.json())
    .then(affirmations => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const randomAffirmation = affirmations[randomIndex].text;
        // set "Unknown" if the 'author' key is missing or empty
        const randomAuthor = affirmations[randomIndex].author || "Unknown";

        // Combine affirmation and author into a single string
        const quoteText = `"${randomAffirmation}" - ${randomAuthor}`;
        document.querySelector('#quote').textContent = quoteText;
    })
    .catch(error => {
        console.error(error);
        // Update to correct selectors or element IDs as needed
        document.getElementById('quote').textContent = 'An inspiring affirmation will arrive soon. Please come back again.';
        // If you have a specific place for the author or an error message, update it here
    });
}

fetchRandomAffirmation();