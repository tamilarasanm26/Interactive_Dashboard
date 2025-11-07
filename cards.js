// Function to fetch product data
async function fetchSalesData() {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/products?_quantity=145');
        const data = await response.json();
        return data.total;
    } catch (error) {
        console.error('Data fetching error occurred', error);
    }
}
// Function to fetch product data
async function fetchVisitorData() {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/persons?_quantity=34');
        const data = await response.json();
        return data.total;
    } catch (error) {
        console.error('Data fetching error occurred', error);
    }
}

//  Function to fetch total users
async function fetchUserData() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        return data.total;   // total users count
    } catch (error) {
        console.error('User data fetching error', error);
    }
}

async function renderCards() {
  const container = document.querySelector('.container');
  const [userTotal, salesTotal, visitorTotal] = await Promise.all([
    fetchUserData(),
    fetchSalesData(),
    fetchVisitorData()
  ]);

  const totals = { userTotal, salesTotal, visitorTotal };

 
  const colors = ['#c1b782ff', '#7597bcff', '#6aa778ff']; // orange, blue, green

  
  const createCard = (title, value, color) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = color;
    card.innerHTML = `<h3>${title} : ${value}</h3>`;
    container.appendChild(card);
  };

  createCard('Total Users', userTotal, colors[0]);
  createCard('Total Visitors', visitorTotal, colors[2]);
  createCard('Total Sales', salesTotal, colors[1]);

  // Pass totals to chart.js for chart creation
  window.dashboardTotals = totals;
}



renderCards();
