const input = Bun.file("./input.txt")

const strArr = (await input.text()).split("\n")

const part1 = () => {
    let sum = 0
    for (const str of strArr) {
        let lineSum = 0
        const nums = str.match(/(\d{1,2}(?!:)|\u007C)/g)
        const pipeIndex = nums?.indexOf("\u007C")
        const win = nums?.slice(0, pipeIndex)
        const our = nums?.slice(pipeIndex! + 1)

        let i = 1
        for (const num of our!) {
            if (win?.includes(num)) {
                // console.log(num)
                if (i === 1) {
                    // console.log("1111")
                    lineSum += 1
                } else {
                    lineSum *= 2
                }
                i++
            }
        }
        console.log(`${strArr.indexOf(str) + 1}:`, lineSum)
        sum += lineSum
    }

    // for (let i = 0; i < 5; i++) {}

    return sum
}

// const part2 = () => {
//     let sum = 0
//     for (const str of strArr) {
//         const blue = str
//             .match(/\d{1,2}(?=\s(blue))/g)
//             ?.reduce((max, x) => (Number(max) < Number(x) ? x : max))
//         const red = str
//             .match(/\d{1,2}(?=\s(red))/g)
//             ?.reduce((max, x) => (Number(max) < Number(x) ? x : max))
//         const green = str
//             .match(/\d{1,2}(?=\s(green))/g)
//             ?.reduce((max, x) => (Number(max) < Number(x) ? x : max))

//         const totalPower = Number(blue) * Number(red) * Number(green)
//         sum += totalPower
//     }
//     return sum
// }

console.log(part1())

// console.log(part2())
