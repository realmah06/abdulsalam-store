document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".contents");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const tabName = this.getAttribute("data-tab");
      
      if (tab.id === "refresh") {
        location.reload();
        return;
      }
      
      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
      
      contents.forEach(content => {
        content.classList.remove("active");
        if (content.id === tabName) {
          content.classList.add("active");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    function updateDate() {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = currentDate.toLocaleString('en-US', { month: 'long' });
        const year = currentDate.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;

        document.querySelectorAll(".current-date").forEach(span => {
            span.textContent = formattedDate;
        });
    }

    updateDate(); // Call the function when the page loads
});
