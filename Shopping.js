function shopping(input) {
    let budget = Number(input[0]);
    let quantity_videocard = Number(input[1]);
    let quantity_proccessor = Number(input[2]);
    let quantity_RAM = Number(input[3]);

    let price_videocard = quantity_videocard * 250
    let price_proccessor = quantity_proccessor * (price_videocard * 0.35);
    let price_RAM = quantity_RAM * (price_videocard * 0.10);
    let all_price = price_videocard + price_proccessor + price_RAM;

    if (quantity_videocard > quantity_proccessor) {
        all_price -= all_price * 0.15;
    }

    if (budget >= all_price) {
        let left_price = budget - all_price;
        console.log(`You have ${left_price.toFixed(2)} euro left.`);
    }
    else {
        let need_price = all_price - budget;
        console.log(`Not enough money! You need ${need_price.toFixed(2)} euro more!`);
    }
}

shopping(
    [
        "920.45",
        "3",
        "1",
        "1"
    ]
)