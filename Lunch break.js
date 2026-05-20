function lunchBreak(input) {
    let film_name = input[0];
    let film_time = Number(input[1]);
    let break_time = Number(input[2]);

    let lunch_time = break_time / 8;
    let relax_time = break_time / 4;
    let other_time = break_time - lunch_time - relax_time;

    if (other_time >= film_time) {
        let left_time = other_time - film_time;
        console.log(`You have enough time to watch ${film_name} and left with ${left_time} minutes free time.`);
    }
    else {
        let need_time = film_time - other_time;
        console.log(`You don't have enough time to watch ${film_name}, you need ${Math.ceil(need_time)} more minutes.`);
    }
}

lunchBreak(
    [
        "Game of Thrones",
        "60",
        "96"
    ]
)

lunchBreak(
    [
        "Teen Wolf",
        "48",
        "60"
    ]
)