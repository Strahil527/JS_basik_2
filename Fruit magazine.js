function fruitMagazine(input) {
    let fruitType = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if (fruitType == "banana") {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                price = quantity * 2.50;
                break;

            case "Saturday":
            case "Sunday":
                price = quantity * 2.70;
                break;

            default:
                console.log("ERROR");
                break;
        }
    }
    else if (fruitType == "apple") {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                price = quantity * 1.20;
                break;

            case "Saturday":
            case "Sunday":
                price = quantity * 1.25;
                break;

            default:
                console.log("ERROR");
                break;
        }
    }
    else if (fruitType == "orange") {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                price = quantity * 0.85;
                break;

            case "Saturday":
            case "Sunday":
                price = quantity * 0.90;
                break;

            default:
                console.log("ERROR");
                break;
        }
    }
    else if (fruitType == "grapefruit") {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                price = quantity * 1.45;
                break;

            case "Saturday":
            case "Sunday":
                price = quantity * 1.60;
                break;

            default:
                console.log("ERROR");
                break;
        }
    }
    else if (fruitType == "kiwi") {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                price = quantity * 2.70;
                break;

            case "Saturday":
            case "Sunday":
                price = quantity * 3;
                break;

            default:
                console.log("ERROR");
                break;
        }
    }
    else if (fruitType == "pineaaple") {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                price = quantity * 5.50;
                break;

            case "Saturday":
            case "Sunday":
                price = quantity * 5.60;
                break;

            default:
                console.log("ERROR");
                break;
        }
    }
    else if (fruitType == "grapes") {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                price = quantity * 3.85;
                break;

            case "Saturday":
            case "Sunday":
                price = quantity * 4.20;
                break;

            default:
                console.log("ERROR");
                break;
        }
    }
    else {
        console.log("ERROR!");
    }

    if (price > 0) {
        console.log(price.toFixed(2));
    }
}

fruitMagazine(
    [
        "apple",
        "Monday",
        "2"
    ]
)