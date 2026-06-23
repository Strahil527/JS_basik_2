function commisionsFunctions(input) {
    let town = input[0];
    let sallValue = Number(input[1]);
    let commisions = 0;

    if (town == "Sofia") {
        if (sallValue >= 0 && sallValue <= 500) {
            commisions = sallValue * 0.05;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue > 500 && sallValue <= 1000) {
            commisions = sallValue * 0.07;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue > 1000 && sallValue <= 10000) {
            commisions = sallValue * 0.08;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue >= 10000) {
            commisions = sallValue * 0.12;
            console.log(commisions.toFixed(2));
        }
        else {
            console.log("ERROR!");
        }
    }
    else if (town == "Varna") {
        if (sallValue >= 0 && sallValue <= 500) {
            commisions = sallValue * 0.045;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue > 500 && sallValue <= 1000) {
            commisions = sallValue * 0.075;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue > 1000 && sallValue <= 10000) {
            commisions = sallValue * 0.10;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue >= 10000) {
            commisions = sallValue * 0.13;
            console.log(commisions.toFixed(2));
        }
        else {
            console.log("ERROR!");
        }
    }
    else if (town == "Plovdiv") {
        if (sallValue >= 0 && sallValue <= 500) {
            commisions = sallValue * 0.055;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue > 500 && sallValue <= 1000) {
            commisions = sallValue * 0.08;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue > 1000 && sallValue <= 10000) {
            commisions = sallValue * 0.12;
            console.log(commisions.toFixed(2));
        }
        else if (sallValue >= 10000) {
            commisions = sallValue * 0.145;
            console.log(commisions.toFixed(2));
        }
        else {
            console.log("ERROR!");
        }
    }
    else {
        console.log("ERROR!");
    }
}

commisionsFunctions(
    [
        "Sofia",
        "1500"
    ]
)

commisionsFunctions(
    [
        "Plovdiv",
        "499.99"
    ]
)

commisionsFunctions(
    [
        "Varna",
        "3874.50"
    ]
)

commisionsFunctions(
    [
        "Montana",
        "412"
    ]
)