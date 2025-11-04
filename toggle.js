

  window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    const element = document.body;
    const btn = document.getElementById("togglebutton");

    if (savedTheme === "dark") {
      element.classList.add("color-mode");
      btn.textContent = "☀️ Light Mode";
    } else {
      element.classList.remove("color-mode");
      btn.textContent = "🌙 Dark Mode";
    }
  };


  function myFunction() {
    const element = document.body;
    const btn = document.getElementById("togglebutton");

    element.classList.toggle("color-mode");

    if (element.classList.contains("color-mode")) {
      btn.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      btn.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  }

