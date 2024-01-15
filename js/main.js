let month = new Date().getMonth() +1;
let day = new Date().getDate();

if (month === 1 && day === 14) {
    document.getElementById("event-header").innerHTML = '<i class="bi bi-cake2"></i>';
}
