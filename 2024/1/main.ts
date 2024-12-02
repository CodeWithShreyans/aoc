const inputFile = Bun.file("./input.txt");

const input = await inputFile.text();

const inputLines = input.split("\n");

let left: number[] = [];
let right: number[] = [];

for (const line of inputLines) {
    const parts = line.split("   ") as [string, string];

    left.push(Number(parts[0]));
    right.push(Number(parts[1]));
}

const partOne = () => {
    let totalDistance = 0;

    left.sort();
    right.sort();

    for (let i = 0; i < left.length; i++) {
        totalDistance += Math.abs(left[i]! - right[i]!);
    }

    console.log(totalDistance);
};

const partTwo = () => {
    let similarity = 0;

    for (const l of left) {
        const r = right.filter((v) => v === l);

        similarity += l * r.length;
    }

    console.log(similarity);
};

partOne();
partTwo();
