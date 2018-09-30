/*jslint
    node
*/
import makeTimeouts from "../source/make-timeouts.mjs";
import parseq from "../library/parseq.mjs";


parseq.parallel(
    [
        parseq.parallel(makeTimeouts(3, 1000)),
        parseq.parallel(makeTimeouts(3, 1000))
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
