function workTime(input) {
    let dayTime = Number(input[0]);
    let day = input[1];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (dayTime >= 10 && dayTime <= 18) {
                console.log("OPEN");
            }
            else {
                console.log("CLOSED");
            }
            break;
        default:
            console.log("CLOSED");
            break;
    }
}

workTime(
    [
        "11",
        "Friday"
    ]
)