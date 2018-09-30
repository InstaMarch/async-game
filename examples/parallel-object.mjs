/*jslint
    node
*/
import makeTimeout from "../source/make-timeout.mjs";
import parseq from "../library/parseq.mjs";


parseq.parallel_object({
    wunSecond: makeTimeout(4, 1000),
    twoSeconds: makeTimeout(5, 2000)
})(
    function (value, reason) {
        if (value) {
            console.log(value);
        }
        if (reason) {
            console.log(reason);
        }
    }
);
