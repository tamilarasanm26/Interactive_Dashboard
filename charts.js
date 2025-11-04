window.addEventListener('load', () => {
  const checkData = setInterval(() => {
    if (window.dashboardTotals) {
      clearInterval(checkData);

      const { userTotal, salesTotal, visitorTotal } = window.dashboardTotals;

      const ctx = document.getElementById('myChart');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Users', 'Sales', 'Visitors'],
          datasets: [{
            label: 'Dashboard Metrics',
            data: [userTotal, salesTotal, visitorTotal],
            backgroundColor: [
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Dashboard Overview',
              color: '#e7881b', 
              font: { size: 18 }
            },
            legend: { 
                display: false 
            
            }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }, 200);
});
