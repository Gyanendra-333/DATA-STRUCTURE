
// . Find the first element having a maximum frequency in a string “unacademy”

function findAltSubSeq(s)
{
    // Length of the string
    var n = s.length, ans = -1000000000;
 
    // Iterate for all possible combinations
    // of a two-digit numbers
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var cur = 0, f = 0;
 
            // Check for alternate occurrence
            // of current combination
            for (var k = 0; k < n; k++) {
 
                if (f == 0 && s[k] - '0' == i) {
                    f = 1;
 
                    // Increment the current value
                    cur++;
                }
                else if (f == 1 && s[k] - '0' == j) {
                    f = 0;
 
                    // Increment the current value
                    cur++;
                }
            }
 
            // If alternating sequence is
            // obtained of odd length
            if (i != j && cur % 2 == 1)
 
                // Reduce to even length
                cur--;
 
            // Update answer to store
            // the maximum
            ans = Math.max(cur, ans);
        }
    }
 
    return ans;
}
 
var s = "100210601";
console.log( findAltSubSeq(s));
 
 