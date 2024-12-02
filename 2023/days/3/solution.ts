const part1 = (strArr: string[]) => {
    let sum = 0
    let allNumMatches: RegExpMatchArray[] = []
    let allSymbolMatches: RegExpMatchArray[] = []
    for (const str of strArr) {
        let numMatches = str.matchAll(/\d{1,3}/dg)
        let symbolMatches = /[^0-9.]/dg.exec(str)

        console.log(numMatches)

        console.log(symbolMatches)

        // numMatches?.indices?.forEach((v, i) => {
        //     symbolMatches?.indices?.forEach((v2, i2) => {
        //         if (v[0] == v2[1] || v[1] == v2[0]) {
        //             sum += Number(numMatches?.splice(i, 1))
        //         }
        //     })
        // })

        // symbolMatches?.forEach((v, i) => {
        //     if (!(strArr.indexOf(str) == 0)) {

        //     }
        // })

        allNumMatches.push(numMatches!)
        allSymbolMatches.push(symbolMatches!)

        // for (const numMatch of numMatches!) {
        //     for (const symbolMatch of symbolMatches!) {
        //         if (
        //             numMatch.ind == symbolMatch ||
        //             numMatch == symbolMatch + 1
        //         ) {
        //             console.log(numMatch, symbolMatch);
        //         }
        //     }
        // }
    }

    console.log(allNumMatches)

    // for (const [i, match] of allNumMatches.entries()) {
    //     for (const [i2, match2] of allSymbolMatches.entries()) {
    //         if (i == i2) {
    //             continue
    //         }

    //         for (const [j, numMatch] of match.indices?.entries()!) {
    //             for (const symbolMatch of (match2 ?? [[]])?.indices!) {
    //                 if (
    //                     numMatch[0] - 1 < symbolMatch[0] &&
    //                     symbolMatch[0] < numMatch[1]
    //                 ) {
    //                     sum += Number(match.splice(j, 1)[0])
    //                 }
    //             }
    //         }
    //     }
    // }

    return sum
}

// const part2 = () => {
//     let sum = 0;
//     for (const str of strArr) {
//         const blue = str
//             .match(/\d{1,2}(?=\s(blue))/g)
//             ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));
//         const red = str
//             .match(/\d{1,2}(?=\s(red))/g)
//             ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));
//         const green = str
//             .match(/\d{1,2}(?=\s(green))/g)
//             ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));

//         const totalPower = Number(blue) * Number(red) * Number(green);
//         sum += totalPower;
//     }
//     return sum;
// };

// const input = Bun.file("./input.txt");

// const strArr = (await input.text()).split("\n");

const strArr = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`.split("\n")

console.log(strArr)

console.log(part1(strArr))

// console.log(part2());
