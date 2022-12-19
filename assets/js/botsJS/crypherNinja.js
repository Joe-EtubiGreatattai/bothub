
function submitForm() {
    // Get the value of the input field
    var text = document.getElementById("text").value;
  
    // Send the input to the Python script using an HTTP request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Do something with the response from the Python script
      }
    };
    xhttp.open("POST", "./../../../python/sentiment-analysis.ipynb", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("text=" + text);
  }

  document.getElementById('back-to-grid').addEventListener('click',()=>{

    window.open('./../../../../html/grid.html', "_self"); 
  })