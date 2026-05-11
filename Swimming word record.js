function swimmingWordRecording(input) {
    let word_record = Number(input[0]);
    let swimming_meters = Number(input[1]);
    let second_swim_one_meters = Number(input[2]);

    let second_swim_all = swimming_meters * second_swim_one_meters;
    second_swim_all += (swimming_meters / 15) * 12.5;

    if (second_swim_all <= word_record) {
        let improved_seconds = word_record - second_swim_all;
        console.log(`Yes, he succeeded! The new world record is ${Math.floor(improved_seconds)} seconds.`);
    }
    else {
        let lagging_seconds = second_swim_all - word_record;
        console.log(`No, he failed! He was ${Math.floor(lagging_seconds)} seconds slower.`);
    }
}

swimmingWordRecording(
    [
        "55555.67",
        "3017",
        "5.03"
    ]
)