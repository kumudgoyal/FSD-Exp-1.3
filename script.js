const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const mainHeading = document.querySelector(".main h2");

// Load saved theme
if (localStorage.getItem("theme")) {
  body.className = localStorage.getItem("theme");
}

// Greeting based on time
const hour = new Date().getHours();
if (hour < 12) {
  mainHeading.textContent = "Good Morning, Admin!";
} else if (hour < 18) {
  mainHeading.textContent = "Good Afternoon, Admin!";
} else {
  mainHeading.textContent = "Good Evening, Admin!";
}

// Toggle theme
toggleBtn.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
  localStorage.setItem("theme", body.className);
});
