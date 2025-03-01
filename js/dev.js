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


// completed BTN all Function
const completedBtns = document.querySelectorAll('#completed-btn');
for (const completedBtn of completedBtns) {
    completedBtn.addEventListener('click', function (event) {
        alert('Board Update Successfully.');

        completedBtn.disabled = true;
        completedBtn.style.backgroundColor = 'gray-100';

        const taskAssigned = document.getElementById('taskAssigned');
        const taskAssignedValue = parseInt(taskAssigned.innerText);
        if (taskAssignedValue > 0) {
            taskAssigned.innerText = taskAssignedValue - 1;
        };

        const navBarTaskCount = document.getElementById('navBarTaskCount');
        const navBarTaskCountValue = parseInt(navBarTaskCount.innerText);
        if (navBarTaskCountValue > 0) {
            navBarTaskCount.innerText = navBarTaskCountValue + 1;
        };

        const activityLogContainer = document.getElementById('activityLog');
        const p = document.createElement('p');
        let timeFormat = 'AM';
        const time = new Date();
        let hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        if (hours >= 12) {
            timeFormat = 'PM';
            if (hours > 12) {
                hours = hours - 12;
            }
            if (hours === 0) {
                hours = 12;
            }
        };
        p.innerText = `You have Complete The Task At This Time.${hours}:${minutes}:${seconds} ${timeFormat}`;
        p.classList.add('bg-cardBg', 'p-2', 'rounded-lg', 'text-center', 'text-descriptionColor1', 'mb-3')
        activityLogContainer.appendChild(p);
    })
};

// Clear History Function
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
clearHistoryBtn.addEventListener('click', function () {
    const activityLogContainer = document.getElementById('activityLog');
    alert('Do You Want To Clear History');
    activityLogContainer.innerHTML = '';
})

