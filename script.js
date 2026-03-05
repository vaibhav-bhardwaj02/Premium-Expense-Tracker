// Global Array 
let incomeTransactions = [];
let expenseTransactions = [];
let allTransactions = [];
// Registration 
document.getElementById("goRegister").addEventListener("click", () => {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("registerPage").style.display = "block";
});

document.getElementById("registerBtn").addEventListener("click", () => {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const profession = document.getElementById("regProfession").value;

  if (!name || !email || !profession) {
  document.getElementById("regMessage").innerText =
    "Please fill all required fields!";
  return;
}

document.getElementById("registerPage").style.display = "none";
document.getElementById("dashboard").style.display = "block";
});
// Navbar Navigation
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = link.getAttribute("data-section");
    document.querySelectorAll("main section").forEach(sec => sec.style.display = "none");
    document.querySelector("." + section).style.display = "block";
  });
});