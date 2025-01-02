const inputFile = Bun.file("./input.txt");

const input = await inputFile.text();

const inputLines = input.split("\n");

const inputMatrix = inputLines.map((v) => v.split(""));

const partOne = () => {
    const checkRight = (i: number, j: number) => {
        if (!inputMatrix[i]) return false;
        return (
            inputMatrix[i][j + 1] === "M" &&
            inputMatrix[i][j + 2] === "A" &&
            inputMatrix[i][j + 3] === "S"
        );
    };

    const checkLeft = (i: number, j: number) => {
        if (!inputMatrix[i]) return false;
        return (
            inputMatrix[i][j - 1] === "M" &&
            inputMatrix[i][j - 2] === "A" &&
            inputMatrix[i][j - 3] === "S"
        );
    };

    const checkDown = (i: number, j: number) => {
        if (!inputMatrix[i + 1] || !inputMatrix[i + 2] || !inputMatrix[i + 3])
            return false;
        return (
            inputMatrix[i + 1]![j] === "M" &&
            inputMatrix[i + 2]![j] === "A" &&
            inputMatrix[i + 3]![j] === "S"
        );
    };

    const checkUp = (i: number, j: number) => {
        if (!inputMatrix[i - 1] || !inputMatrix[i - 2] || !inputMatrix[i - 3])
            return false;
        return (
            inputMatrix[i - 1]![j] === "M" &&
            inputMatrix[i - 2]![j] === "A" &&
            inputMatrix[i - 3]![j] === "S"
        );
    };

    const checkDownRight = (i: number, j: number) => {
        if (!inputMatrix[i + 1] || !inputMatrix[i + 2] || !inputMatrix[i + 3])
            return false;
        return (
            inputMatrix[i + 1]![j + 1] === "M" &&
            inputMatrix[i + 2]![j + 2] === "A" &&
            inputMatrix[i + 3]![j + 3] === "S"
        );
    };

    const checkDownLeft = (i: number, j: number) => {
        if (!inputMatrix[i + 1] || !inputMatrix[i + 2] || !inputMatrix[i + 3])
            return false;
        return (
            inputMatrix[i + 1]![j - 1] === "M" &&
            inputMatrix[i + 2]![j - 2] === "A" &&
            inputMatrix[i + 3]![j - 3] === "S"
        );
    };

    const checkUpRight = (i: number, j: number) => {
        if (!inputMatrix[i - 1] || !inputMatrix[i - 2] || !inputMatrix[i - 3])
            return false;
        return (
            inputMatrix[i - 1]![j + 1] === "M" &&
            inputMatrix[i - 2]![j + 2] === "A" &&
            inputMatrix[i - 3]![j + 3] === "S"
        );
    };

    const checkUpLeft = (i: number, j: number) => {
        if (!inputMatrix[i - 1] || !inputMatrix[i - 2] || !inputMatrix[i - 3])
            return false;
        return (
            inputMatrix[i - 1]![j - 1] === "M" &&
            inputMatrix[i - 2]![j - 2] === "A" &&
            inputMatrix[i - 3]![j - 3] === "S"
        );
    };

    let total = 0;

    for (let i = 0; i < inputMatrix.length; i++) {
        for (let j = 0; j < inputMatrix[0]?.length!; j++) {
            if (inputMatrix[i]![j] === "X") {
                total += checkRight(i, j) ? 1 : 0;
                total += checkLeft(i, j) ? 1 : 0;
                total += checkDown(i, j) ? 1 : 0;
                total += checkUp(i, j) ? 1 : 0;
                total += checkDownRight(i, j) ? 1 : 0;
                total += checkDownLeft(i, j) ? 1 : 0;
                total += checkUpRight(i, j) ? 1 : 0;
                total += checkUpLeft(i, j) ? 1 : 0;
            }
        }
    }

    console.log(total);
};

const partTwo = () => {
    console.log(input);
    const checkAM = (i: number, j: number) => {
        if (
            (inputMatrix[i + 1] &&
                ((inputMatrix[i + 1]![j + 1] === "A" &&
                    inputMatrix[i + 2]![j + 2] === "M") ||
                    (inputMatrix[i + 1]![j - 1] === "A" &&
                        inputMatrix[i + 2]![j - 2] === "M"))) ||
            (inputMatrix[i - 1] &&
                ((inputMatrix[i - 1]![j + 1] === "A" &&
                    inputMatrix[i - 2]![j + 2] === "M") ||
                    (inputMatrix[i - 1]![j - 1] === "A" &&
                        inputMatrix[i - 2]![j - 2] === "M")))
        ) {
            return true;
        }

        return false;
    };

    const checkAS = (i: number, j: number) => {
        if (
            (inputMatrix[i + 1] &&
                inputMatrix[i + 2] &&
                ((inputMatrix[i + 1]![j + 1] === "A" &&
                    inputMatrix[i + 2]![j + 2] === "S") ||
                    (inputMatrix[i + 1]![j - 1] === "A" &&
                        inputMatrix[i + 2]![j - 2] === "S"))) ||
            (inputMatrix[i - 1] &&
                inputMatrix[i - 2] &&
                ((inputMatrix[i - 1]![j + 1] === "A" &&
                    inputMatrix[i - 2]![j + 2] === "S") ||
                    (inputMatrix[i - 1]![j - 1] === "A" &&
                        inputMatrix[i - 2]![j - 2] === "S")))
        ) {
            return true;
        }

        return false;
    };

    for (let i = 0; i < inputMatrix.length; i++) {
        for (let j = 0; j < inputMatrix[0]?.length!; j++) {
            if (inputMatrix[i]![j] === "M") {
                console.log(checkAS(i, j));
                j++;
                continue;
            } else if (inputMatrix[i]![j] === "S") {
                console.log(checkAM(i, j));
                j++;
                continue;
            }
        }
    }
};

partTwo();
