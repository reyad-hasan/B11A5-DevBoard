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

// completed-btn function
const completedBtn = document.querySelectorAll('#completed-btn');
for (const btn of completedBtn) {
    btn.addEventListener('click', function () {
        alert('Board Update Successfully.');

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
    })
}

