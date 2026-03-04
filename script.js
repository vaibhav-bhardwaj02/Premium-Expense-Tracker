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
});