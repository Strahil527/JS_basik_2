function food(input) {
    let inputFood = input[0];

    switch (inputFood) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("Fruit!");
            break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("Vegetable!");
            break;

        default:
            console.log("Unknown!");
            break;
    }
}

food(["water"])