// Data for Overview
const revenueData = 10500;
const expenseData = 10500;
const invoicesDue = 10500;
const salesData = 1000;

// Function to update stats
function updateOverviewStats() {
    // Update the revenue stats
    document.getElementById("revenue-stats").querySelector("p").textContent = `$${revenueData}`;
    document.getElementById("revenue-stats").querySelector("span").textContent = "+3% from last month";

    // Update the expense chart
    document.getElementById("expense-chart").querySelector("p").textContent = `$${expenseData}`;
    document.getElementById("expense-chart").querySelector("span").textContent = "+3% from last month";

    // Update invoices due
    document.getElementById("invoices-due").querySelector("p").textContent = invoicesDue;
    document.getElementById("invoices-due").querySelector("span").textContent = "+3% from last month";

    // Update sales
    document.getElementById("sales").querySelector("p").textContent = salesData;
    document.getElementById("sales").querySelector("span").textContent = "+3% from last month";
}

// Chart Data
const revenueChartData = {
    labels: ["Jul 01", "Jul 05", "Jul 10", "Jul 15", "Jul 20", "Jul 25"],
    datasets: [{
        label: 'Revenue',
        data: [9500, 10000, 10500, 11000, 12000, 12500],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
    }]
};

const expenseChartData = {
    labels: ["Jul 01", "Jul 05", "Jul 10", "Jul 15", "Jul 20", "Jul 25"],
    datasets: [{
        label: 'Expenses',
        data: [9000, 9500, 10500, 11000, 11500, 12000],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false
    }]
};

const salesChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        label: 'Sales',
        data: [100, 150, 200, 250, 300, 350, 400],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false
    }]
};

// Function to initialize the charts
function initializeCharts() {
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const expenseCtx = document.getElementById('expenseChart').getContext('2d');
    const salesCtx = document.getElementById('salesChart').getContext('2d');

    // Create the charts
    new Chart(revenueCtx, {
        type: 'line',
        data: revenueChartData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(expenseCtx, {
        type: 'line',
        data: expenseChartData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(salesCtx, {
        type: 'line',
        data: salesChartData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize data and charts on page load
window.onload = function() {
    updateOverviewStats();
    initializeCharts();
};
