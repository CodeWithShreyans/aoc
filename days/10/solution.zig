const std = @import("std");

pub fn main() !void {
    const stdout_file = std.io.getStdOut().writer();
    var bw = std.io.bufferedWriter(stdout_file);
    const stdout = bw.writer();

    const input =
        \\..F7.
        \\.FJ|.
        \\SJ.L7
        \\|F--J
        \\LJ...
    ;

    // const lines = std.ArrayList(std.ArrayListAligned(u8, ?u29)).init(std.heap.page_allocator);

    var lines = std.mem.zeroes([5]u8);

    var line: usize = 0;
    var f: u8 = 0;
    for (input) |c| {
        lines[line][f] = c;
        f += 1;
        if (c == '\n') {
            line += 1;
        }
    }

    for (input, 0..) |c, i| {
        if (c == 'S') {
            try stdout.print("found S at {}\n", .{i});
            break;
        }
    }

    try bw.flush(); // don't forget to flush!
}
