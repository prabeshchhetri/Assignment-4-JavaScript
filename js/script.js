

// Student info 
document.addEventListener("DOMContentLoaded", () => {
    const studentInfo = document.getElementById("student-info");
    studentInfo.textContent = "Student ID: 200603366 | Name: Prabesh Chhetri";
  });
  
  // Make API call to NewsAPI
  function getHeadlines() {
    const apiKey = '240c9c20cd4f474dbe907bc3718215f8'; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response error');
        return response.json();
      })
      .then(data => {
        const newsList = document.getElementById("newsList");
        newsList.innerHTML = ""; // Clear previous headlines
  
        data.articles.slice(0, 5).forEach(article => {
          const li = document.createElement("li");
          li.innerHTML = `<strong>${article.title}</strong><br><a href="${article.url}" target="_blank">Read more</a>`;
          newsList.appendChild(li);
        });
      })
      .catch(error => {
        document.getElementById("newsList").innerHTML = `<li>Error loading news: ${error.message}</li>`;
      });
  }
  