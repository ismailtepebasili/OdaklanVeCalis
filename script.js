function increaseHour(clock) {
    const hourId = `hour${clock}`;
    const hourElement = document.getElementById(hourId);
    let hour = parseInt(hourElement.textContent);
    hourElement.textContent = ++hour;
}
    