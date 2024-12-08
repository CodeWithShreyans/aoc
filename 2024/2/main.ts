const inputFile = Bun.file("./input.txt");

const input = await inputFile.text();

const inputLines = input.split("\n");

const partOne = () => {
    const check = (incDec: number, i: number[], j: number) => {
        if (incDec ? i[j]! > i[j - 1]! : i[j]! < i[j - 1]!) {
            return false;
        }

        const diff = Math.abs(i[j]! - i[j - 1]!);
        if (diff < 1 || diff > 3) {
            return false;
        }

        return true;
    };

    let inputNums: number[][] = [];

    for (const i of inputLines) {
        inputNums.push(i.split(" ").map((v) => Number(v)));
    }

    let safe = 0;

    for (const i of inputNums) {
        let incDec = 0;

        if (i[1]! < i[0]!) {
            incDec = 1;
        }

        let localSafe: boolean = false;
        for (let j = 1; j < i.length; j++) {
            localSafe = check(incDec, i, j);
            if (localSafe == false) {
                break;
            }
        }
        safe += localSafe ? 1 : 0;
    }

    console.log(safe);
};

const partTwo = () => {
    const check = (incDec: number, i: number[], j: number) => {
        if (incDec ? i[j]! > i[j - 1]! : i[j]! < i[j - 1]!) {
            return false;
        }

        const diff = Math.abs(i[j]! - i[j - 1]!);
        if (diff < 1 || diff > 3) {
            return false;
        }

        return true;
    };

    let inputNums: number[][] = [];

    for (const i of inputLines) {
        inputNums.push(i.split(" ").map((v) => Number(v)));
    }

    let safe = 0;

    for (const i of inputNums) {
        console.log(inputNums.indexOf(i));
        let incDec = 0;

        let ii = Array.from(i);

        for (let k = 0; k < i.length + 1; k++) {
            if (ii[1]! < ii[0]!) {
                incDec = 1;
            } else {
                incDec = 0;
            }

            let localSafe: boolean = false;
            for (let j = 1; j < ii.length; j++) {
                localSafe = check(incDec, ii, j);
                if (localSafe == false) {
                    ii = k < i.length ? i.toSpliced(k, 1) : [];
                    break;
                }
            }
            if (localSafe) {
                safe += 1;
                break;
            }
        }
    }

    console.log(safe);
};

partOne();
partTwo();
