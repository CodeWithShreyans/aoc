const input = Bun.file("./input.txt");

const strArr = (await input.text()).split("\n");

const part1 = () => {
    let total = 0;
    for (const str of strArr) {
        const digits = str.match(/\d/g);
        total += +`${digits?.[0]}${digits?.[digits?.length - 1]}`;
    }

    return total;
};

const part2 = () => {
    const words = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const map = new Map();
    for (const word of words) {
        map.set(word, words.indexOf(word) + 1);
    }
    map.set("ight", 8);
    map.set("ne", 1);
    map.set("ine", 9);
    map.set("hree", 3);
    map.set("wo", 2);

    let total = 0;
    for (const str of strArr) {
        const digits = str.match(
            /\d|(one|two|three|four|five|six|seven|eight|nine)|(((?<=one)|(?<=three))ight|(?<=two)ne|(?<=seven)ine|(?<=eight)hree|(?<=eight)wo)/g
        );
        total += +`${map.get(digits?.[0]) ?? digits?.[0]}${
            map.get(digits?.[digits?.length - 1]) ??
            digits?.[digits?.length - 1]
        }`;
    }

    return total;
};

console.log(part1());

console.log(part2());
