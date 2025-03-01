day,month,date,year
const calenderBox = document.getElementById('calenderBox');
const calender = new Date();
const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allWeek = daysName[calender.getDay()];
const allMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = allMonthNames[calender.getMonth()];
const date = calender.getDate() + 1;
const year = calender.getFullYear();
const h3 = document.createElement('h3');
h3.innerHTML = `${allWeek},<br><span class="font-semibold text-lg">${month} ${date} ${year}</span>`;
calenderBox.appendChild(h3);

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

        const parent = completedBtn.parentNode.parentNode.parentNode;
        const children = parent.children[1];
        const title = children.innerText;
        p.innerHTML = `You have Complete The <br> <span class="text-primaryColor font-semibold">${title}</span><br> At This Time.${hours}:${minutes}:${seconds} ${timeFormat}`;
        p.classList.add('bg-cardBg', 'p-2', 'rounded-lg', 'text-center', 'text-descriptionColor1', 'mb-3')
        activityLogContainer.appendChild(p);

        if (taskAssignedValue === 1) {
            alert("Congrats!!! You Have Completed All Current Task.");
        }
    })
};

// Clear History Function
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
clearHistoryBtn.addEventListener('click', function () {
    const activityLogContainer = document.getElementById('activityLog');
    alert('Do You Want To Clear History');
    activityLogContainer.innerHTML = '';
})



const homePage = document.getElementById('homePage');
homePage.addEventListener('click', function(){
    window.location.href = 'index.html';
})
