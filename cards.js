
async function fetchDashboardData() {
  try {
    const response = await fetch('https://69119ee97686c0e9c20e4613.mockapi.io/api/v1/dashboard');
    const monthlyData = await response.json(); 
    const totals = monthlyData.reduce(
      (acc, item) => {
        acc.users += item.users;
        acc.visitors += item.visitors;
        acc.sales += item.sales;
        return acc;
      },
      { users: 0, visitors: 0, sales: 0 }
    );

    return totals;
  } catch (error) {
    console.error('Dashboard data fetching error:', error);
    return { users: 0, visitors: 0, sales: 0 }; 
  }
}


async function renderCards() {
  const container = document.querySelector('.container');
  const colors = ['#c1b782', '#6aa778', '#7597bc']; 

  const { users, visitors, sales } = await fetchDashboardData();


  const createCard = (title, value, color) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = color;
    card.innerHTML = `
      <h3>${title} : ${value}</h3>
    `;
    container.appendChild(card);
  };

 
  createCard('Total Users', users, colors[0]);
  createCard('Total Visitors', visitors, colors[1]);
  createCard('Total Sales', sales, colors[2]);
}

window.addEventListener('load', renderCards);
