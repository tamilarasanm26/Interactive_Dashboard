window.addEventListener('load', () => {
  const checkData = setInterval(() => {
    if (window.dashboardTotals) {
      clearInterval(checkData);

      const { userTotal, salesTotal, visitorTotal } = window.dashboardTotals;

      const ctx = document.getElementById('myChart');
      const filter = document.getElementById('chartFilter');

      const allData = {
        users: userTotal,
        sales: salesTotal,
        visitors: visitorTotal
      };

      // Create chart using total values get from cards.js gobal variable
      let chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Dashboard Overview'],
          datasets: [
            {
              label: 'Users',
              data: [userTotal],
              backgroundColor: '#c1b782ff' // orange
            },
            {
              label: 'Visitors',
              data: [visitorTotal],
              backgroundColor: '#6aa778ff' // blue
            },
            {
              label: 'Sales',
              data: [salesTotal],
              backgroundColor: '#7597bcff' // teal
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
           
            legend: { display: true, onClick: null } 
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });

      // Filter dropdown logic
      filter.addEventListener('change', (e) => {
        const value = e.target.value;

        if (value === 'all') {
          chart.data.labels = ['Dashboard Overview'];
          chart.data.datasets[0].data = [allData.users];
          chart.data.datasets[1].data = [allData.visitors];
          chart.data.datasets[2].data = [allData.sales];
        } else {
          chart.data.labels = [value.charAt(0).toUpperCase() + value.slice(1)];
          chart.data.datasets.forEach((d) => (d.data = []));
          const target = chart.data.datasets.find(
            (d) => d.label.toLowerCase() === value
          );
          if (target) target.data = [allData[value]];
        }

        chart.update();
      });
    }
  }, 200);
});
