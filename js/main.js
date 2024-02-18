let month = new Date().getMonth() +1;
let day = new Date().getDate();

// Check if it is my birthday
if (month === 1 && day === 14) {
    document.getElementById("event-header").innerHTML = '<i class="bi bi-cake2"></i>';
}

// Calculate my experience years
document.getElementById("experience-years").innerHTML = new Date().getFullYear() - 2017;

const toastLiveExample = document.getElementById('liveToastIvanWeather');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();