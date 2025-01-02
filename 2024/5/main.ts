const inputFile = Bun.file("./input.txt");

const input = await inputFile.text();

const inputParts = input.split("\n\n");

const rules = inputParts[0]?.split("\n").map((v) => v.split("|"))!;

let rulesDict: Record<string, string[]> = {};

for (const i of rules) {
    rulesDict[i[1]!] = [];
}

for (const i of rules) {
    rulesDict[i[1]!]?.push(i[0]!);
}

const updates = inputParts[1]?.split("\n").map((v) => v.split(","))!;

const check = (i: number) => {
    for (let j = 0; j < updates[i]!.length; j++) {
        for (let k = j + 1; k < updates[i]!.length; k++) {
            if (rulesDict[updates[i]![j]!]?.includes(updates[i]![k]!)) {
                return;
            }
        }
    }
    return Number(updates[i]![(updates[i]!.length - 1) / 2]);
};

let total = 0;

for (let i = 0; i < updates.length; i++) {
    total += check(i) || 0;
}

console.log(total);
