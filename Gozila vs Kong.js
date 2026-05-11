function GodzilaVsKong(input) {
    let film_budget = Number(input[0]);
    let quantity_statist = Number(input[1]);
    let price_clothing_per_statist = Number(input[2]);
    let sum = 0;

    let dekor_price = film_budget * 0.10;
    let price_clothing = quantity_statist * price_clothing_per_statist;

    if (quantity_statist >= 150) {
        price_clothing -= price_clothing * 0.10;
    }

    sum = dekor_price + price_clothing;

    if (sum > film_budget) {
        let need_money = sum - film_budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${need_money.toFixed(2)} euro more.`);
    }
    else {
        let left_money = film_budget - sum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${left_money.toFixed(2)} euro left.`);
    }
}

GodzilaVsKong(
    [
        "9587.88",
        "222",
        "55.68"
    ]
)