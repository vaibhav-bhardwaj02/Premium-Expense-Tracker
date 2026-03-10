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
// Charts 
const ctxLine = document.getElementById("overviewLine").getContext("2d");
let lineChart = new Chart(ctxLine, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Income",
      data: [],
      borderColor: "#00f0ff",
      fill: false
    }]
  },
  options: {
  plugins: { legend: { labels: { color: "#fff" } } },
  scales: { 
    x: { ticks: { color: "#fff" } }, 
    y: { ticks: { color: "#fff" } } 
  }
}
});
// Pie chart (Overview)
const ctxPie = document.getElementById("overviewPie").getContext("2d");
let pieChart = new Chart(ctxPie, {
  type: "pie",
  data: {
    labels: ["Income","Expense"],
    datasets: [{
      data: [0,0],
      backgroundColor: ["#00f0ff","#ff5b6b"]
    }]
  },
  options: {
  plugins: { legend: { labels: { color: "#fff" } } }
}
});
// Income chart
const ctxIncome = document.getElementById("incomeChart").getContext("2d");
let incomeChart = new Chart(ctxIncome, {
  type: "bar",
  data: { 
    labels: [], 
    datasets: [{ 
      label: "Income", 
      data: [], 
      backgroundColor: "#00f0ff" 
    }] 
  }
});