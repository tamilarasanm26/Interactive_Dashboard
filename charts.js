window.addEventListener('load', () => {
  const checkData = setInterval(() => {
    if (window.dashboardTotals) {
      clearInterval(checkData);

      const { userTotal, salesTotal, visitorTotal } = window.dashboardTotals;

      const ctx = document.getElementById('myChart');
      const filter = document.getElementById('chartFilter');

      // Store all data
      const allData = {
        users: userTotal,
        sales: salesTotal,
        visitors: visitorTotal
      };

      // Create chart instance
      let chart = new Chart(ctx, {
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
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });

      // Update chart based on dropdown
      filter.addEventListener('change', (e) => {
        const value = e.target.value;

        if (value === 'all') {
          chart.data.labels = ['Users', 'Sales', 'Visitors'];
          chart.data.datasets[0].data = [allData.users, allData.sales, allData.visitors];
        } else {
          chart.data.labels = [value.charAt(0).toUpperCase() + value.slice(1)];
          chart.data.datasets[0].data = [allData[value]];
        }

        chart.update();
      });
    }
  }, 200);
});
