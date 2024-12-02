// I TRIED

use regex::{Matches, Regex};
use std::fs;

#[derive(Debug)]
struct NumMatch {
    lx: i32,
    rx: i32,
    y: i32,
    num: String,
}

#[derive(Debug)]
struct SymbolMatch {
    x: i32,
    y: i32,
}

fn part1() {
    // let data = fs::read_to_string("days/3/input.txt").expect("Unable to read file");
    let data = "467..114..
...*......
..35..633.
......#...
*617......
......+58.
..592.....
......755.
...$.*....
.664.598..";
    let lines = data.lines();

    let num_reg = Regex::new(r"\d{1,3}").unwrap();
    let symbol_reg = Regex::new("[^0-9.\n]").unwrap();

    let mut num_matches: Vec<NumMatch> = Vec::new();
    let mut symbol_matches: Vec<SymbolMatch> = Vec::new();

    for (i, line) in lines.enumerate() {
        let matches = num_reg.find_iter(line);
        for matched in matches {
            num_matches.push(NumMatch {
                lx: matched.start() as i32,
                rx: matched.end() as i32,
                y: i as i32,
                num: matched.as_str().to_string(),
            });
        }

        let s_matches = symbol_reg.find_iter(line);

        for matched in s_matches {
            symbol_matches.push(SymbolMatch {
                x: matched.start() as i32,
                y: i as i32,
            });
        }
    }

    for (i, matched) in symbol_matches.iter().enumerate() {
        let mat = (&mut num_matches).iter().filter(|&num_match| {
            {
                (matched.y == num_match.y
                    && (matched.x == num_match.lx - 1 || matched.x == num_match.rx + 1))
                    || ((matched.y == num_match.y - 1 || matched.y == num_match.y + 1)
                        && (num_match.rx - 1 <= matched.x && matched.x <= num_match.rx + 1))
            }
        });

        let mut dup: String = "0".to_string();
        for m in mat {
            if dup == m.num {
                mat.collect::<Vec<_>>();
            }
            dup = m.num.clone();
            println!("{:#?}", m);
        }
    }

    // println!("{:#?}\n{:#?}", num_matches, symbol_matches);
}

fn main() {
    part1();
}
