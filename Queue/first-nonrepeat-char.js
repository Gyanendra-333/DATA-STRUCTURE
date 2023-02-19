let str = "abab";
let result = [];
/*
[b] {a: 2, b: 1} => [a, a]

[c, d]
c

q = []; map = { }
q = [a]; map = { a: 1 } => a

q = [a, b]; map = { a: 1, b: 1 }; b === q[0] && map(q[0]) > 1 => a(q[0])

q = [a, b]; map = { a: 2, b: 1 }; a === q[0] && map(q[0]) > 1 => dequeue
q = [b]; map = { a: 2, b: 1 }; a === q[0] && map(q[0]) > 1 => dequeue => b(q[0])

q = [b]; map = { a: 2, b: 2 }; b === q[0] && map(q[0]) > 1 => dequeue
q = []; map = { a: , b: 2 }; b === q[0] && map(q[0]) > 1 => dequeue => q[0].isEmpty ? -1 : q[0]

q = []; map = { a: 3, b: 2 }; a === q[0] && map(q[0]) > 1 => dequeue
*/

function firstNonRepeatingChar(str) {
    let queue = [];
    let map = new Map([]);

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let front = queue[0];
        let returnVal = -1;

        map.set(char, map.get(char) ? map.get(char) + 1 : 1);

        while (map.get(front) > 1) {
            queue.shift();
            front = queue[0];
        }
        // need to check if the length of char in map is greater than 1
        if (map.get(char) <= 1) {
            queue.push(char);
        }
        front = queue[0];

        // if queue is empty returnVal is -1;
        if (queue.length === 0) returnVal = -1;
        else returnVal = front;

        result.push(returnVal);
    }
}

firstNonRepeatingChar(str);

console.log(result);
