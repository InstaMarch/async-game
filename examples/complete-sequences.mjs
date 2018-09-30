/*jslint
    node
*/
import makeTimeouts from "../source/make-timeouts.mjs";
import parseq from "../library/parseq.mjs";


parseq.sequence(
    [
        parseq.sequence(makeTimeouts(3, 1000)),
        parseq.sequence(makeTimeouts(3, 1000))
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
