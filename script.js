// Global Array 
let incomeTransactions = [];
let expenseTransactions = [];
let allTransactions = [];
// Registration 
document.getElementById("goRegister").addEventListener("click", () => {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("registerPage").style.display = "block";
});