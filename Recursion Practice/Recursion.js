
let word = "abcdefagha";
let map = new Map([]);

for (let i = 0; i < word.length; i++) {
    if (map.has(word[i])) {

        let val = map.get(word[i])
        map.set(word[i], val + 1)
    }
    else {
        map.set(word[i], 1)
    }
}
console.log(map);