let typed = new Typed(".multitext", {
  strings: ["Education", "Skill", "interest", "code"],
  loop: true,
  backSpeed: 100,
  typeSpeed: 150,
  backDelay: 1500,
});
const list = document.querySelectorAll(".list");
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activelink));
const toggleButton = document.getElementById("toggleButton");
const menu = document.getElementById("menu");

// toggleButton.addEventListener("click", () => {
//   if (menu.style.display === "none") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// });

let hiddenElement = document.getElementById("container");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    hiddenElement.style.display = "block";
  } else {
    hiddenElement.style.display = "none";
  }
});
function submitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "") {
    showError("Please enter your name.");
    return;
  }

  if (email === "") {
    showError("Please enter your email.");
    return;
  }

  if (!isValidEmail(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  if (message === "") {
    showError("Please enter your message.");
    return;
  }

  showSuccess("Form submitted successfully!");
  document.getElementById("contactForm").reset();
}

function showError(errorMessage) {
  let errorElement = document.getElementById("error");
  errorElement.innerText = errorMessage;
  errorElement.style.display = "block";
}

function showSuccess(successMessage) {
  let successElement = document.getElementById("success");
  successElement.innerText = successMessage;
  successElement.style.display = "block";
}

function isValidEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
