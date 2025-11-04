  const homeLink = document.getElementById('homeLink');
    const activityLink = document.getElementById('activityLink');
    const dashboardSection = document.getElementById('dashboardSection');
    const activitySection = document.getElementById('activitySection');

    homeLink.addEventListener('click', () => {
      dashboardSection.style.display = 'flex';
      activitySection.style.display = 'none';
      homeLink.classList.add('active');
      activityLink.classList.remove('active');
    });

    activityLink.addEventListener('click', () => {
      dashboardSection.style.display = 'none';
      activitySection.style.display = 'block';
      activityLink.classList.add('active');
      homeLink.classList.remove('active');
    });