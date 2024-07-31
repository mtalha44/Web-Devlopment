function clock() {
    const day = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    document.querySelector(".day").innerText = `${dayNames[day.getDay()]} ${monthNames[day.getMonth()]} ${day.getFullYear()}`;

    let h = day.getHours();
    const m = String(day.getMinutes()).padStart(2, '0');
    const s = String(day.getSeconds()).padStart(2, '0');
    
    const timePeriod = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12; // Convert 24-hour time to 12-hour time and handle 12:00 as 12, not 0
    const formattedH = String(h).padStart(2, '0');

    document.querySelector(".time").innerHTML = `${formattedH}:${m}:${s} ${timePeriod}`;
}

clock(); // Initial call to set the time immediately
setInterval(clock, 1000); // Update every second
