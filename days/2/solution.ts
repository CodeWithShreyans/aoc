const input = Bun.file("./input.txt");

const strArr = (await input.text()).split("\n");

const part1 = () => {
    let sum = 0;
    for (const str of strArr) {
        const blue = str
            .match(/\d{1,2}(?=\s(blue))/g)
            ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));
        const red = str
            .match(/\d{1,2}(?=\s(red))/g)
            ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));
        const green = str
            .match(/\d{1,2}(?=\s(green))/g)
            ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));

        if (Number(blue) <= 14 && Number(green) <= 13 && Number(red) <= 12) {
            sum += strArr.indexOf(str) + 1;
            console.log(sum, strArr.indexOf(str) + 1);
        }
    }
    return sum;
};

const part2 = () => {
    let sum = 0;
    for (const str of strArr) {
        const blue = str
            .match(/\d{1,2}(?=\s(blue))/g)
            ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));
        const red = str
            .match(/\d{1,2}(?=\s(red))/g)
            ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));
        const green = str
            .match(/\d{1,2}(?=\s(green))/g)
            ?.reduce((max, x) => (Number(max) < Number(x) ? x : max));

        const totalPower = Number(blue) * Number(red) * Number(green);
        sum += totalPower;
    }
    return sum;
};

console.log(part1());

console.log(part2());
