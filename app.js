const endDate = "6 August 2023 12:00:00 AM"
const inputs = document.querySelectorAll('input');

const clock = () => {
    const endTime = new Date(endDate);
    const currentTime = new Date();
    const timeDifference = (endTime - currentTime) / 1000;

    if (timeDifference < 0){
        return
    }
    const daysLeft = Math.floor(timeDifference / 3600 / 24); // this is the logic to calculate days
    const hoursLeft = Math.floor(timeDifference / 3600) % 24; // this is the logic to calculate hours
    const minutesLeft = Math.floor(timeDifference / 60) % 60; // this is the logic to calculate minutes
    const secondsLeft = Math.floor(timeDifference) % 60; // this is the logic to calculate seconds
    inputs[0].value = daysLeft;
    inputs[1].value = hoursLeft;
    inputs[2].value = minutesLeft;
    inputs[3].value = secondsLeft;

}

clock(); // this calls the function

setInterval(
    () => {
        clock();
    }, 1000
)