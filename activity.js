const activityLog = [
  { id: 1, name: 'Tamilarasan', action: 'Generated PDF report', time: '09:30 AM' },
  { id: 2, name: 'Sowmiya', action: 'Logged in', time: '09:45 AM' },
  { id: 3, name: 'Nitesh', action: 'Added a new sale', time: '10:15 AM'}
];

function renderActivityTable() {
  const tableBody = document.getElementById('activityBody');
  tableBody.innerHTML = '';

  activityLog.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.id}</td>
      <td>${log.name}</td>
      <td>${log.action}</td>
      <td>${log.time}</td>
    `;
    tableBody.appendChild(row);
  });
}

window.addEventListener('load', renderActivityTable);
