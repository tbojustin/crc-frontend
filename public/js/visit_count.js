function visit_count() {
    fetch("https://isi03rijgg.execute-api.us-east-1.amazonaws.com/test")
        .then(response => response.json())
        .then(data => document.getElementById('Visit_Count').innerHTML = `Visits: ${data}`)
        .catch(err => console.log(err));
}
