window.addEventListener('load', async () => {
  const ctx = document.getElementById('myChart');
  const filter = document.getElementById('chartFilter');

  async function fetchDashboardData() {
    try {
      const response = await fetch('https://69119ee97686c0e9c20e4613.mockapi.io/api/v1/dashboard');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
     
    }
  }
  
  const data = await fetchDashboardData();

  if (!data || data.length === 0) {
    console.error('No data available in API');
    return;
  }

 
  const labels = data.map(item => item.month);
  const userData = data.map(item => item.users);
  const visitorData = data.map(item => item.visitors);
  const salesData = data.map(item => item.sales);

 
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Users',
          data: userData,
          borderColor: '#c1b782',
          backgroundColor: '#c1b78288',
        },
        {
          label: 'Visitors',
          data: visitorData,
          borderColor: '#6aa778',
          backgroundColor: '#6aa77888',
        },
        {
          label: 'Sales',
          data: salesData,
          borderColor: '#7597bc',
          backgroundColor: '#7597bc88',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, onClick: null },
        title: {
          display: true,
          text: 'Monthly Dashboard Line Chart'
        }
      },
    }
  });

  // Filter using  dropdown based on user or visitor or sales
 filter.addEventListener('change', (e) => {
  const value = e.target.value;

  if (value === 'all') {
  
    chart.data.datasets[0].data = userData;
    chart.data.datasets[1].data = visitorData;
    chart.data.datasets[2].data = salesData;
  } else {
  
    chart.data.datasets.forEach(d => d.data = []);

   
    if (value === 'users') chart.data.datasets[0].data = userData;
    if (value === 'visitors') chart.data.datasets[1].data = visitorData;
    if (value === 'sales') chart.data.datasets[2].data = salesData;
  }

  chart.update();
});

});
