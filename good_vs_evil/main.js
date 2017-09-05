// Description
//
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain 'worth' when battling against others. On the side of good we have the following races, with their associated worth:
//
// Hobbits - 1
// Men - 2
// Elves - 3
// Dwarves - 3
// Eagles - 4
// Wizards - 10

// On the side of evil we have:
//
// Orcs - 1
// Men - 2
// Wargs - 2
// Goblins - 2
// Uruk Hai - 3
// Trolls - 5
// Wizards - 10

// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.
//
//     Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
//
//     Input:
//
// The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.
//
//     The first parameter will contain the count of each race on the side of good in the following order:
//
//     Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
//         The second parameter will contain the count of each race on the side of evil in the following order:
//
//     Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
//     All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
//
//     Output:
//
// Return ""Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.


const goodVsEvil = (good, evil) => {
    let good_army = good.split(" ");
    let good_result = 0;
    let good_total = 0;
    let evil_army = evil.split(" ");
    let evil_result = 0;
    let evil_total = 0;

    for (let i = 0; i <= good_army.length - 1; i++) {
        switch (good_army[i]) {

            case good_army[0]:
                good_result = Number(good_army[i]) * 1;
                good_total += good_result;
                break;

            case good_army[1]:
                good_result = Number(good_army[i]) * 2;
                good_total += good_result;
                break;

            case good_army[2]:
                good_result = Number(good_army[i]) * 3;
                good_total += good_result;
                break;

            case good_army[3]:
                good_result = Number(good_army[i]) * 3;
                good_total += good_result;
                break;

            case good_army[4]:
                good_result = Number(good_army[i]) * 4;
                good_total += good_result;
                break;

            case good_army[5]:
                good_result = Number(good_army[i]) * 10;
                good_total += good_result;
                break;
        }
    }

    for (let j = 0; j <= evil_army.length - 1; j++) {

        switch (evil_army[j]) {

            case evil_army[0]:
                evil_result = Number(evil_army[j]) * 1;
                evil_total += evil_result;
                break;

            case evil_army[1]:
                evil_result = Number(evil_army[j]) * 2;
                evil_total += evil_result;
                break;

            case evil_army[2]:
                evil_result += Number(evil_army[j]) * 2;
                evil_total += evil_result;
                break;

            case evil_army[3]:
                evil_result += Number(evil_army[j]) * 2;
                evil_total += evil_result;
                break;

            case evil_army[4]:
                evil_result += Number(evil_army[j]) * 3;
                evil_total += evil_result;
                break;

            case evil_army[5]:
                evil_result += Number(evil_army[j]) * 5;
                evil_total += evil_result;
                break;

            case evil_army[6]:
                evil_result += Number(evil_army[j]) * 10;
                evil_total += evil_result;
                break;
        }
    }
    console.log("Good: " + good_total);
    console.log("Evil: " + evil_total);
    // if (good_result === evil_result) {
    //     console.log('Battle Result: No victor on this battle field');
    //     return 'Battle Result: No victor on this battle field';
    // }
    // else if (good_result > evil_result) {
    //     console.log('Battle Result: Good triumphs over Evil');
    //     return 'Battle Result: Good triumphs over Evil';
    // }
    // else if (evil_result > good_result) {
    //     console.log('Battle Result: Evil eradicates all trace of Good');
    //     return 'Battle Result: Evil eradicates all trace of Good'
    // }
};

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'); // 'Battle Result: Evil eradicates all trace of Good', 'Evil should win' );
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'); // 'Battle Result: Good triumphs over Evil', 'Good should win' );
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'); // 'Battle Result: No victor on this battle field', 'Should be a tie' );