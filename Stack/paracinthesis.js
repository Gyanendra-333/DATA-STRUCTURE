
let input = "({[]})";
let map = new Map([]);

map.set("(", ")"),
    map.set("{", "}"),
    map.set("[", "]"),


    function checkParanrhesisValid(str) {
        let stack = [];
        let i = 0;

        while (i !== str.length) {
            let char = str[i];
            if (map.has(char)) stack.push(map.get(char));
            else {
                if (stack[stack.length - 1] === char) {
                    stack.pop();

                } else return false;
            }
            i++;
        }
        return stack.length === 0;
    }
let result = checkParanrhesisValid(input);

console.log(result);