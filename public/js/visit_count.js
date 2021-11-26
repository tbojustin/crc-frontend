function visit_count() {
    fetch("https://w894g5a5sa.execute-api.us-east-1.amazonaws.com/test")
        .then(response => response.json())
        .then(data => document.getElementById('Visit_Count').innerHTML = `Vistor: ${data}`)
        .catch(err => console.log(err));
}
