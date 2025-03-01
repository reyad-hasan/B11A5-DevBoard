// // change background-color randomly Function
const bgChangeBtn = document.getElementById('bgChangeBtn');
function getRandomColor() {
    const numbers = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + numbers[Math.floor(Math.random() * 16)];
    }
    return color;
}
bgChangeBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});

// go to discover page
document.getElementById('discoverPage').addEventListener('click', function () {
    window.location.href = 'discover.html';
})

// day month date year
const calenderContainer = document.getElementById('calenderBox');
const p = document.createElement('p');
const date = new Date();
const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = allDays[date.getDay()];
const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = allMonth[date.getMonth()];
const toDayDate = date.getDate();
const year = date.getFullYear();
p.innerHTML= `${day},<span class="font-semibold"><br>${month} ${toDayDate} ${year}</span>`;
calenderContainer.appendChild(p);

// completed-btn function
const completedBtn = document.querySelectorAll('#completed-btn');
for (const btn of completedBtn) {
    btn.addEventListener('click', function () {
        alert('Board Update Successfully.');

        // taskAssigned -value
        const taskAssigned = document.getElementById('taskAssigned');
        const taskAssignedValue = parseInt(taskAssigned.innerText);
        if (taskAssignedValue > 0) {
            taskAssigned.innerText = taskAssignedValue - 1;
        };

        // taskAssigned +value
        const navBarTaskCount = document.getElementById('navBarTaskCount');
        const navBarTaskCountValue = parseInt(navBarTaskCount.innerText);
        if (navBarTaskCountValue > 0) {
            navBarTaskCount.innerText = navBarTaskCountValue + 1;
        };

        // activity Log
        const activityContainer = document.getElementById('activityLog');
        const p = document.createElement('p');

        // get innerText from target btn
        const parent = btn.parentNode.parentNode.parentNode;
        const child = parent.children[1].innerText;

        // get time
        const time = new Date();
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        let timeFormat = 'AM';
        if (hours >= 12) {
            timeFormat = 'PM'
        }
        if (hours > 12) {
            hours = hours - 12;
        } else if (hours === 0) {
            hours = 12;
        }

        p.innerHTML = `You have Complete The <br> <span class="text-primaryColor font-semibold">${child}</span> <br> At This Time <span class="text-red-700">${hours}:${minutes}:${seconds} ${timeFormat}</span>`;
        p.classList.add('bg-cardBg', 'p-2', 'rounded-lg', 'text-center', 'text-descriptionColor1', 'mb-3');
        activityContainer.appendChild(p);

        btn.disabled = true;
        btn.style.backgroundColor = 'gray-100';

        if (taskAssignedValue === 1) {
            alert("Congrats!!! You Have Completed All Current Task.")
        }

    })
}

// activity log clear
document.getElementById('clearHistoryBtn').addEventListener('click', function () {
    document.getElementById('activityLog').innerHTML = '';
})

