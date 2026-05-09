function bonusPoints(input) {
    let startPoints = Number(input[0]);
    let bonus = 0.0;

    if (startPoints <= 100) {
        bonus = 5;

        if (startPoints % 2 == 0) {
            bonus += 1
        }
        else if (startPoints % 10 == 5) {
            bonus += 2;
        }
    }
    else if (startPoints > 100 && startPoints <= 1000) {
        bonus = startPoints * 0.20;

        if (startPoints % 2 == 0) {
            bonus += 1
        }
        else if (startPoints % 10 == 5) {
            bonus += 2;
        }
    }
    else if (startPoints > 1000) {
        bonus = startPoints * 0.10;

        if (startPoints % 2 == 0) {
            bonus += 1
        }
        else if (startPoints % 10 == 5) {
            bonus += 2;
        }
    }

    startPoints += bonus;

    console.log(bonus);
    console.log(startPoints);
}

bonusPoints(["20"])
console.log("---------");
bonusPoints(["175"])