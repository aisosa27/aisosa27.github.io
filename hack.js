<!DOCTYPE html>
<html>
<head>
  <title>Landing Page</title>
</head>
<body>
  <h1 id="completion-header">Completion</h1>
  <p id="completion-date">To be updated</p>
  <p>URL: <a href="https://aisosa27.github.io">https://aisosa27.github.io</a></p>
  <script>
    const date = new Date();
    const completionHeader = document.querySelector("#completion-header");
    const completionDate = document.querySelector("#completion-date");
    
    completionHeader.innerHTML = "Completion - " + date.toDateString();
    completionDate.innerHTML = "Name: To be updated";
  </script>
</body>
</html>

