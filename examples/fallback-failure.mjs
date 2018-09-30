/*jslint
    node
*/
import makeTimeouts from "../source/make-timeouts.mjs";
import makeTimeout from "../source/make-timeout.mjs";
import parseq from "../library/parseq.mjs";


parseq.sequence(
    [
        parseq.sequence(makeTimeouts(3, 1000)),
        parseq.fallback([
            makeTimeout(4, 1000, 100),
            makeTimeout(5, 500, 600),
            makeTimeout(6, 500, 700)
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
