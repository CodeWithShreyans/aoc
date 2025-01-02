import { stdout } from "bun";

const inputFile = Bun.file("./input.txt");

const input = await inputFile.text();

const inputLines = input.split("\n");

const inputMatrix = inputLines.map((v) => v.split(""));

type Direction = "up" | "down" | "left" | "right";

let i = 0;
let j = 0;
let direction: Direction = "up";
let positions = 0;

for (const k of inputMatrix) {
    const pos = k.indexOf("^");
    if (pos !== -1) {
        i = inputMatrix.indexOf(k);
        j = pos;
        k[i]![j] == "X";
        break;
    }
}

const printMatrix = () => {
    const writer = stdout.writer();
    for (const i of inputMatrix) {
        for (const j of i) {
            writer.write(j);
        }
        writer.write("\n");
    }

    writer.end();
};

while (true) {
    if (direction === "up") {
        if (!inputMatrix.at(i - 1)) break;
        if (inputMatrix[i - 1]![j] !== "#") {
            i--;
            inputMatrix[i]![j] = "X";
        } else {
            direction = "right";
        }
    } else if (direction === "right") {
        if (!inputMatrix.at(i)?.at(j + 1)) break;
        if (inputMatrix[i]![j + 1] !== "#") {
            j++;
            inputMatrix[i]![j] = "X";
        } else {
            direction = "down";
        }
    } else if (direction === "down") {
        if (!inputMatrix.at(i + 1)) break;
        if (inputMatrix[i + 1]![j] !== "#") {
            i++;
            inputMatrix[i]![j] = "X";
        } else {
            direction = "left";
        }
    } else if (direction === "left") {
        if (!inputMatrix.at(i)?.at(j - 1)) break;
        if (inputMatrix[i]![j - 1] !== "#") {
            j--;
            inputMatrix[i]![j] = "X";
        } else {
            direction = "up";
        }
    }
}

printMatrix();

for (const i of inputMatrix) {
    for (const j of i) {
        if (j === "X") {
            positions++;
        }
    }
}

console.log(positions);
