const inputFile = Bun.file("./input.txt");

const input = await inputFile.text();

const partOne = () => {
    const matches = input.matchAll(/(?<=mul\()\d+,\d+(?=\))/g);

    const matchesArray = Array.from(matches).flatMap((v) => v[0]);

    let total = 0;

    for (const i of matchesArray) {
        const j = i.split(",");

        total += Number(j[0]) * Number(j[1]);
    }

    console.log(total);
};

const partTwo = () => {
    const matches = input.matchAll(
        /(do\(\)|don't\(\))|((?<=mul\()\d+,\d+(?=\)))/g
    );

    const matchesArray = Array.from(matches).flatMap((v) => v[0]);

    console.log(matchesArray);

    let total = 0;

    let doo = true;

    for (const i of matchesArray) {
        if (i == "do()") {
            doo = true;
        } else if (i == "don't()") {
            doo = false;
        } else if (doo) {
            const j = i.split(",");

            total += Number(j[0]) * Number(j[1]);
        }
    }

    console.log(total);
};

partOne();
partTwo();
