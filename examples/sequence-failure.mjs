/*jslint
    node
*/
import makeTimeouts from "../source/make-timeouts.mjs";
import makeTimeout from "../source/make-timeout.mjs";
import parseq from "../library/parseq.mjs";


parseq.sequence(
    [
        parseq.sequence(makeTimeouts(3, 1000)),
        parseq.sequence([
            makeTimeout(4, 1000, 2000),
            makeTimeout(5, 500, 2000),
            makeTimeout(6, 500, 200)
        ])
    ]
)(
    function (value, reason) {
        if (value) {
            console.log(value);
        }
        if (reason) {
            console.log(reason);
        }
    }
);
