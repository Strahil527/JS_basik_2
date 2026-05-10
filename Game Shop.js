function gameShop(input) {
    let puzzle_price = 2.60;
    let speak_doll = 3;
    let teddy_bear = 4.10;
    let minions = 8.20;
    let tir_toy = 2;

    let holiday_price = Number(input.shift());
    let all_sum = 0;
    let toy_counter = 0;
    let rent = 0;

    let puzzle_quantity = Number(input[0]);
    let speak_doll_quantity = Number(input[1]);
    let teddy_bear_quantity = Number(input[2]);
    let minions_quantity = Number(input[3]);
    let tir_toy_quantity = Number(input[4]);

    let sum_puzzle = puzzle_quantity * puzzle_price;
    let sum_speak_doll = speak_doll_quantity * speak_doll;
    let sum_teddy_bear = teddy_bear_quantity * teddy_bear;
    let sum_minions = minions_quantity * minions;
    let sum_tir_toy = tir_toy_quantity * tir_toy;

    for (let i = 0; i < input.length; i++) {
        toy_counter += Number(input[i]);
    }

    all_sum = sum_puzzle + sum_speak_doll + sum_teddy_bear + sum_minions + sum_tir_toy;

    if (toy_counter >= 50) {
        all_sum -= all_sum * 0.25;
    }

    rent = all_sum * 0.10;
    all_sum -= rent;

    if (all_sum >= holiday_price) {
        let left_price = all_sum - holiday_price;
        console.log(`Yes! ${left_price.toFixed(2)} lv left.`);
    }
    else {
        let need_price = holiday_price - all_sum;
        console.log(`Not enough money! ${need_price.toFixed(2)} lv needed.`);
    }
}

gameShop(
    [
        "40.8",
        "20",
        "25",
        "30",
        "50",
        "10"
    ]
)
console.log("-----");
gameShop(
    [
        "320",
        "8",
        "2",
        "5",
        "5",
        "1"
    ]
)