import { findDirectorySizes, findDirectoryToDelete } from "../src/day7/filesystem";

describe('Day 7 Part 1', () => {
  it('Calculates the total size of directories', () => {
    const commands = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k    
    `.split('\n').map(line => line.trim()).filter((line) => line.length > 0);

    expect(findDirectorySizes(commands)).toBe(95437)
  })

})

describe('Day 7 Part 1', () => {
  it('Calculates the total size of directories', () => {
    const commands = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k    
    `.split('\n').map(line => line.trim()).filter((line) => line.length > 0);

    expect(findDirectoryToDelete(commands)).toBe(24933642)
  })

})