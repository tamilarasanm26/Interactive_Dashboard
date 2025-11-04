// Function to fetch product data
async function fetchSalesData() {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/products?_quantity=18');
        const data = await response.json();
        return data.total;
    } catch (error) {
        console.error('Data fetching error occurred', error);
    }
}
// Function to fetch product data
async function fetchVisitorData() {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10');
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

  // cards for displying total metrics
  const createCard = (title, value) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h3>${title}: ${value}</h3>`;
    container.appendChild(card);
  };

  createCard('Total Users', userTotal);
  createCard('Total Sales', salesTotal);
  createCard('Total Visitors', visitorTotal);

  // Pass totals to chart.js for chart creation
  // Store in global variable for chart.js to use
  window.dashboardTotals = totals;
}


renderCards();
